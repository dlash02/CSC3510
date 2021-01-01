'use strict';

const sessions = [
  {
    session_title: 'ES2030: A Preview',
    session_presenter: 'Titus Wong',
    session_day: 'Thursday',
    session_start: '12:30',
    session_end: '2:00',
    session_summary: 'It\'s always something, but for 2030, it\'s a lot more!',
  },
  {
    session_title: 'Structure Without Structure',
    session_presenter: 'Shelby Ingersoll',
    session_day: 'Wednesday',
    session_start: '9:30',
    session_end: '11:00',
    session_summary: 'Destructuring is like that grade school bully who became your high school bestie',
  },
  {
    session_title: 'Keep it classy?',
    session_presenter: 'Vineet Taylor & Lela Martinez',
    session_day: 'Thursday',
    session_start: '4:00',
    session_end: '5:30',
    session_summary: 'Debate: Are classes the best thing ever, or just plain unnecessary? Note: We will provide tomatoes to throw!',
  }
];

const template = (session) => {
  const session_title = session.session_title;
  const session_day = session.session_day;
  const session_start = session.session_start;
  const session_end = session.session_end;
  const session_presenter = session.session_presenter;
  const session_summary = session.session_summary;
  return (
   `<div class='session'>
      <p class='title'>${session_title}</p>
      <p><span class='label'>Time: </span>${session_day} ${session_start} - ${session_end}</p>
      <p><span class='label'>Presenter: </span>${session_presenter}</p>
      <p>${session_summary}</p>
    </div>`
  )
};

window.addEventListener('DOMContentLoaded', () => {
  let content = '';
  sessions.forEach((session) => {
    content += (template(session));
  });
  document.querySelector('.sessions').innerHTML = content;
});