'use strict';

const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg',
  },
  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg',
  },
  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg',
  },
  {
    name: 'Merkitty',
    skill: 'swimming',
    imgUrl: '/static/img/merge.png',
  },
  {
    name: 'Millie',
    skill: 'card tricks',
    imgUrl: '/static/img/off-by-one.jpeg',
  },
  {
    name: 'Princess',
    skill: 'making rainbows',
    imgUrl: '/static/img/placeholder.png',
  },
  {
    name: 'Harold',
    skill: 'brewing coffee',
    imgUrl: '/static/img/polymorphism.jpeg',
  },
  {
    name: 'Uber',
    skill: 'being sweet',
    imgUrl: '/static/img/seedpy.jpeg',
  },
  {
  name: 'Betty',
  skill: 'baking',
  imgUrl: '/static/img/shortstack-overflow.jpeg',
}
];

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}



for (const card of tradingCardData) {
  document.querySelector('div.grid').insertAdjacentHTML(
    'beforeend',
    `<div id=${card['name']}></div>`,
  );
  ReactDOM.render(
    <TradingCard name={card['name']} skill={card['skill']} imgUrl={card['imgUrl']} />,
    document.querySelector(`#${card['name']}`),
  );
}

// ReactDOM.render(
//   <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
//   document.querySelector('#balloonicorn'),
// );

// ReactDOM.render(
//   <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
//   document.querySelector('#float'),
// );

// ReactDOM.render(
//   <TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
//   document.querySelector('#llambda'),
// );
