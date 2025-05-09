const form = document.getElementById('form');

form.addEventListener('submit', async(event)=>{
  event.preventDefault();

  const usuario = {
    nome: document.getElementById('input-name').value,
    email: document.getElementById('input-email').value,
    senha: document.getElementById('input-password').value
  }
  try{
    const response = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    });
    const result = await response.json();
    alert(result.mensagem)
  }
  catch(error){
    console.log('erro ao enviar os dados', error)
  }
})
