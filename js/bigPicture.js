import { isEscape } from './util';
import { COMMENTS_SHOWN } from './constants';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const pictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const commentShownCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');

// Создание комментария к фотографиям
const createComments = ({ avatar, name, message }) => {
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
  // делаем глубокое клонирование каждого комментария
  const commentsElement = commentTemplate.cloneNode(true);
  commentsElement.querySelector('.social__picture').src = avatar;
  commentsElement.querySelector('.social__picture').alt = name;
  commentsElement.querySelector('.social__text').textContent = message;

  return commentsElement;
};

// рендер комментариев к фотографиям
const renderComments = (comments) => {
  const commentsListFragment = document.createDocumentFragment();
  const socialComments = bigPicture.querySelector('.social__comments');

  comments.forEach((comment) => {
    const commentElement = createComments(comment);
    commentsListFragment.append(commentElement);
  });

  socialComments.textContent = '';
  socialComments.append(commentsListFragment);
};

export const openBigPicture = (dataPhoto) => {
  const pictureDescription = bigPicture.querySelector('.social__caption');
  bigPicture.classList.remove('hidden');

  bigPictureImage.src = dataPhoto.url;
  likesCount.textContent = dataPhoto.likes;
  pictureDescription.innerHTML = dataPhoto.description;
  commentShownCount.textContent = dataPhoto.comments.length;
  renderComments(dataPhoto.comments);
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

pictureCloseButton.addEventListener('click', closeBigPicture);
