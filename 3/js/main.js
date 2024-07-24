const NUMBER_OBJECT_DESCRIPTIONS = 25;
const ID_MIN = 1;
const ID_MAX = 25;
const URL_MIN = 1;
const URL_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;

const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const COMMENTS_ID_MIN = 1;
const COMMENTS_ID_MAX = COMMENTS_MAX * ID_MAX;
const COMMENTS_AVATAR_MIN = 1;
const COMMENTS_AVATAR_MAX = 6;

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION_TEXT = [
  'Вся красота мира в одной картинке.',
  'Моменты, которые запечатлены навсегда.',
  'Счастье в каждом кадре.',
  'Когда слова не нужны, достаточно фотографии.',
  'История, рассказанная через объектив.',
  'Остановить время в одном кадре.',
  'Фотография — это способ улыбнуться в будущем.',
  'Сегодня — самый лучший день.',
  'Я не доверяю словам. Я доверяю фотографиям.',
  'Фотографии — это свидетельство о том, что мы жили.',
];

// РАНДОМНОЕ ЧИСЛО
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// РАНДОМНОЕ ЧИСЛО БЕЗ ПОВТОРОВ
function createRandomNumberFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа от ${min} до ${max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generateRandomId = createRandomNumberFromRangeGenerator(ID_MIN, ID_MAX);
const generateRandomUrl = createRandomNumberFromRangeGenerator(URL_MIN, URL_MAX);
const generateRandomLikes = createRandomNumberFromRangeGenerator(LIKES_MIN, LIKES_MAX);
const generateRandomComments = createRandomNumberFromRangeGenerator(COMMENTS_MIN, COMMENTS_MAX);
const generateRandomCommentId = createRandomNumberFromRangeGenerator(COMMENTS_ID_MIN, COMMENTS_ID_MAX);

// РАНДОМНЫЙ ЭЛЕМЕНТ МАССИВА
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// СОЗДАЁТ КОММЕНТАРИЙ
const createComment = () => ({
  id: generateRandomCommentId(),
  avatar: `img/avatar-${getRandomInteger(COMMENTS_AVATAR_MIN, COMMENTS_AVATAR_MAX)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});

// СОЗДАЁТ ОПИСАНИЕ К ФОТО
const createObjectPhotoDescription = () => ({
  id: generateRandomId(),
  url: `photos/${generateRandomUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_TEXT),
  likes: generateRandomLikes(),
  comments: Array.from({length: generateRandomComments()}, createComment),
});

const arrayPhotoDescription = Array.from({length: NUMBER_OBJECT_DESCRIPTIONS}, createObjectPhotoDescription);
