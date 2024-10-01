export function formateDate(dateString?: string) {
  const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).*/;

  if (!dateString) return;
  
  const match = regex.exec(dateString);
  if (!match) {
      return "Formato de data inválido";
  }

  const [, anoStr, mesStr, diaStr, horaStr, minutoStr] = match;
  
  const ano = parseInt(anoStr, 10);
  const mes = parseInt(mesStr, 10);
  const dia = parseInt(diaStr, 10);
  const hora = parseInt(horaStr, 10);
  const minuto = parseInt(minutoStr, 10);

  const data = new Date(ano, mes - 1, dia, hora, minuto);

  const horaFormatada = data.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}, ${horaFormatada}`;
}
