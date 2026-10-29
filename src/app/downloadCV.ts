import { profile } from '../data/profile';

export async function downloadCV() {
  try {
    const res = await fetch(profile.cv);
    if (!res.ok) throw new Error('PDF not available');
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = profile.cvFileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  } catch (err) {
    try {
      window.open(profile.cv, '_blank');
    } catch (e) {
      alert('No se pudo descargar el CV. Por favor reemplaza src/assets/cv andres criollo.pdf con tu archivo PDF.');
    }
  }
}
