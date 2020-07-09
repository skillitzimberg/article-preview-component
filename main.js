const footer = document.getElementById('foot');

const author = document.getElementById('author');

const social = document.getElementById('social');

function active() {
  let footerClass = footer.getAttribute('class');
  let authorClass = '';
  let socialClass = 'hidden';

  footerClass === ''
    ? ((footerClass = 'active'), (authorClass = 'hidden'), (socialClass = ''))
    : ((footerClass = ''), (authorClass = ''), (socialClass = 'hidden'));

  footer.setAttribute('class', footerClass);
  author.setAttribute('class', authorClass);
  social.setAttribute('class', socialClass);
}
