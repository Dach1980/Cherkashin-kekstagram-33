// Количество сгенерированных объектов
const SIMILAR_USER_COUNT = 25;

// Основные магические числа
const PHOTO_MIN = 1;
const PHOTO_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

// Возможные описания фотографий
const DESCRIPTIONS = [
  'Закат над морем.',
  'Горный пейзаж.',
  'Семейный пикник.',
  'Морская прогулка.',
  'Техно-арт.',
  'На отдыхе.'
];

// Возможные сообщения для комментариев
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Возможные имена для комментаторов
const NAMES = [
  'Артём',
  'Ольга',
  'Иван',
  'Мария',
  'Дмитрий',
  'Анна',
  'Елена',
  'Сергей',
  'Настя',
  'Максим',
  'Татьяна',
  'Ирина'
];

// Метод по выбору случайного числа
let GetRandomElementArray = getRandomInteger(0, DESCRIPTIONS.length - 1);

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createDataPhoto = () => ({
  id: getRandomInteger(1, SIMILAR_USER_COUNT),
  url: String('photos/' + getRandomInteger(1, SIMILAR_USER_COUNT) + '.jpg'),
  description: DESCRIPTIONS[GetRandomElementArray],
  comments: {
    commentId: getRandomInteger(1, SIMILAR_USER_COUNT), // ? повторить значение id
    avatar: String('img/avatar-' + getRandomInteger(1, 6) + '.svg'),
    message: MESSAGES[GetRandomElementArray], // ? случайно выбрать одно-два сообщения
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  }
});

const similarUserObject = Array.from({ length: SIMILAR_USER_COUNT }, createDataPhoto);

similarUserObject();
