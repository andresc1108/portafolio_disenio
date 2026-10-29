import { useState } from 'react';
import { motion } from 'motion/react';
import { Activity } from 'lucide-react';
import { useTheme } from '../../theme';
import { useT } from '../../../i18n';
import { ui } from '../../../i18n/ui';
import { profile } from '../../../data/profile';
import { downloadCV } from '../../downloadCV';
import { SectionTitle } from '../SectionTitle';

type FormState = { name: string; company: string; phone: string; email: string; subject: string; message: string };

const emptyForm: FormState = { name: '', company: '', phone: '', email: '', subject: '', message: '' };

function InfoCard({ onPrefill }: { onPrefill: (data: Partial<FormState>) => void }) {
  const { theme } = useTheme();
  const t = useT();

  const prefill = () => onPrefill({ subject: t(ui.contact.form.prefillSubject), message: t(ui.contact.form.prefillMessage) });

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    prefill();
    downloadCV();
  };

  const handlePrefill = (e: React.MouseEvent) => {
    e.preventDefault();
    prefill();
    // Scroll to form and focus
    setTimeout(() => {
      const el = document.querySelector<HTMLInputElement>('input[name="name"]');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.focus();
      }
    }, 100);
  };

  return (
    <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20' : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30'}`}>
      <div className="flex items-start gap-4">
        <Activity size={32} className="text-blue-500 mt-0.5 flex-shrink-0" />
        <div className="w-full">
          <h4 className="text-base font-bold mb-2">{t(profile.title)}</h4>
          <p className={theme === 'dark' ? 'text-sm text-gray-300' : 'text-sm text-gray-700'} style={{ fontWeight: 500, lineHeight: 1.6 }}>{t(profile.lookingFor)}</p>

          <div className="mt-4 flex gap-2">
            <button onClick={handlePrefill} className="px-3 py-2 bg-blue-500 text-white rounded-full text-xs font-bold hover:bg-blue-600 transition-colors">{t(ui.contact.contactMe)}</button>
            <button onClick={handleDownload} className="px-3 py-2 border border-blue-500 text-blue-500 rounded-full text-xs font-bold hover:bg-blue-500/10 transition-colors">{t(ui.downloadCV)}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm({ form, setForm }: { form: FormState; setForm: React.Dispatch<React.SetStateAction<FormState>> }) {
  const { theme } = useTheme();
  const t = useT();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const submitViaForm = (data: Record<string, string>) => {
    const f = document.createElement('form');
    f.action = `https://formsubmit.co/${profile.formEmail}`;
    f.method = 'POST';
    f.target = '_blank';

    Object.entries(data).forEach(([k, v]) => {
      const i = document.createElement('input');
      i.type = 'hidden';
      i.name = k;
      i.value = v;
      f.appendChild(i);
    });

    const subj = document.createElement('input');
    subj.type = 'hidden';
    subj.name = '_subject';
    subj.value = `Nuevo mensaje desde portfolio: ${data.subject || 'Contacto'}`;
    f.appendChild(subj);

    document.body.appendChild(f);
    f.submit();
    f.remove();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    // Validation: require name, email, phone, message
    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus(t(ui.contact.form.requiredError));
      setSending(false);
      return;
    }

    try {
      submitViaForm(form);
      setStatus(t(ui.contact.form.sent));
      setForm(emptyForm);
    } catch (err) {
      setStatus(t(ui.contact.form.error));
    } finally {
      setSending(false);
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-full border ${theme === 'dark' ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`;

  return (
    <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-white/5 border border-blue-500/20' : 'bg-white border border-gray-200'}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder={t(ui.contact.form.name)} className={inputClass} />
          <input name="company" value={form.company} onChange={handleChange} placeholder={t(ui.contact.form.company)} className={inputClass} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="phone" value={form.phone} onChange={handleChange} placeholder={t(ui.contact.form.phone)} className={inputClass} />
          <input name="email" value={form.email} onChange={handleChange} placeholder={t(ui.contact.form.email)} className={inputClass} />
        </div>

        <input name="subject" value={form.subject} onChange={handleChange} placeholder={t(ui.contact.form.subject)} className={inputClass} />

        <textarea name="message" value={form.message} onChange={handleChange} placeholder={t(ui.contact.form.message)} rows={4} className={`w-full px-4 py-3 rounded-xl border resize-none ${theme === 'dark' ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} />

        <div>
          <button type="submit" disabled={sending} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-bold transition-colors">
            {sending ? t(ui.contact.form.sending) : t(ui.contact.form.send)}
          </button>
          {status && <div className="mt-3 text-sm text-gray-300">{status}</div>}
        </div>
      </form>
    </div>
  );
}

export function ContactSection() {
  const { theme } = useTheme();
  const t = useT();

  // Lifted form state so InfoCard can prefill it
  const [form, setForm] = useState<FormState>(emptyForm);

  const prefillForm = (data: Partial<FormState>) => {
    setForm(prev => ({ ...prev, ...data }));
    // focus first input
    setTimeout(() => {
      const el = document.querySelector<HTMLInputElement>('input[name="name"]');
      if (el) el.focus();
    }, 50);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle className="mb-8">{t(ui.contact.title)}</SectionTitle>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-blue-500 mb-12 tracking-tighter"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.03em' }}
        >
          {t(ui.contact.subtitle)}
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            {profile.links.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} transition-all group`}
              >
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'} mb-2`} style={{ fontWeight: 800 }}>{item.label}</div>
                <motion.a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-lg hover:text-blue-500 transition-colors"
                  style={{ fontWeight: 700 }}
                >
                  <item.icon size={24} className="group-hover:scale-110 transition-transform text-blue-500" />
                  {item.value}
                </motion.a>
              </motion.div>
            ))}

            <InfoCard onPrefill={prefillForm} />
          </div>

          <div>
            <ContactForm form={form} setForm={setForm} />
          </div>
        </div>

        <div className={`pt-8 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <div className="tracking-tighter text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.05em' }}>{profile.footerName}</div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}`} style={{ fontWeight: 600 }}>{t(profile.footer)}</div>
        </div>
      </div>
    </section>
  );
}
