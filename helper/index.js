export function formatingDate(date){
    const dateNow= new Date(date);
    const opciones={
        year:'numeric',
        month:'long',
        day:'2-digit'
    }
    return dateNow.toLocaleDateString("es-es",opciones)

}