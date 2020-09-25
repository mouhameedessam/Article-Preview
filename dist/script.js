const share = document.getElementById('share');
const social = document.getElementById('social');

if (social.classList !== 'hide')
{
 social.classList.add('hide'); 
}

share.addEventListener('click', () => {
  
  social.classList.toggle('hide'); 
})

