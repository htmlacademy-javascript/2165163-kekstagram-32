import {
  NUMBER_OBJECT_DESCRIPTIONS,
  ID_MIN,
  ID_MAX,
  URL_MIN,
  URL_MAX,
  LIKES_MIN,
  LIKES_MAX,
  COMMENTS_MIN,
  COMMENTS_MAX,
  COMMENTS_ID_MIN,
  COMMENTS_ID_MAX,
  COMMENTS_AVATAR_MIN,
  COMMENTS_AVATAR_MAX,
  NAMES,
  MESSAGE,
  DESCRIPTION_TEXT
} from './data.js';

import {
  getRandomInteger,
  createRandomNumberFromRangeGenerator,
  getRandomArrayElement
} from './util.js';

const generateRandomId = createRandomNumberFromRangeGenerator(ID_MIN, ID_MAX);
const generateRandomUrl = createRandomNumberFromRangeGenerator(URL_MIN, URL_MAX);
const generateRandomLikes = createRandomNumberFromRangeGenerator(LIKES_MIN, LIKES_MAX);
const generateRandomComments = createRandomNumberFromRangeGenerator(COMMENTS_MIN, COMMENTS_MAX);
const generateRandomCommentId = createRandomNumberFromRangeGenerator(COMMENTS_ID_MIN, COMMENTS_ID_MAX);

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

const createArrayPhotoDescription = () => Array.from({length: NUMBER_OBJECT_DESCRIPTIONS}, createObjectPhotoDescription);

export {createArrayPhotoDescription};
