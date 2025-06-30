export function guardarLista(verLista) {
    localStorage.setItem('verLista', JSON.stringify(verLista));
    console.log('✅ Lista guardada en localStorage:', verLista.length, 'películas');
}
export function cargarLista() {
    const stored = localStorage.getItem('verLista');
    const result = stored ? JSON.parse(stored) : [];
    console.log('📂 Lista cargada desde localStorage:', result.length, 'películas');
    return result;
}