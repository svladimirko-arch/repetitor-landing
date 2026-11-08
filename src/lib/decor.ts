import { decor } from '../data/data'

/**
 * Фоновые слои карточек: полупрозрачная вуаль + декоративные волны
 * (06_dekorativnyy_fon.png). Слои задаются одним background-image, поэтому
 * контент карточек всегда рисуется поверх фона — без псевдоэлементов.
 * cover обрезает картинку под пропорции карточки, не растягивая её.
 */
const wavesUrl = decor.cardBackground
  ? `${import.meta.env.BASE_URL}${decor.cardBackground}`
  : ''

/** Светлые карточки: белая вуаль поверх волн */
export const wavesLight = wavesUrl
  ? {
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.82)), url(${wavesUrl})`,
      backgroundSize: 'auto, cover',
      backgroundPosition: 'center, center',
    }
  : undefined

/** Тёмные карточки (акцентный тариф): синяя вуаль поверх волн */
export const wavesDark = wavesUrl
  ? {
      backgroundImage:
        'linear-gradient(rgba(11, 36, 71, 0.87), rgba(19, 58, 122, 0.87)), ' +
        `url(${wavesUrl})`,
      backgroundSize: 'auto, cover',
      backgroundPosition: 'center, center',
    }
  : undefined
