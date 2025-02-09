/** the response type of /api/embed-text/twitter */
export interface TweetInfo {
  /** Tweet本文 */
  description?: string;

  /** Tweet投稿者の表示名 */
  screenName: string;

  /** Tweetに添付された画像 */
  images: string[];
}
