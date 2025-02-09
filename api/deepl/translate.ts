/**
 * The response type of /api/deepl/translate?text=:text, which is used in [Translation mode (beta)](https://scrapbox.io/help/Translation_mode_(beta)).
 *
 * This API internall calls [DeepL API Pro](https://www.deepl.com/docs-api/).
 */
export interface TranslationResult {
  /** Translated text */
  result: string;
}
