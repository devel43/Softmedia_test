import { API } from ".";
import { IRating } from "../interfaces/dictionaries";

/**
 * Set fake ratings dictionary to 
 * @param  {Ratings} ratings
 */
export const setRatingsToStorage = (ratings: Array<IRating>) => {
  const ratingsJson = JSON.stringify(ratings)
  API.post('ratings', ratingsJson)
}

/**
 * Get ratings dictionary by fake API
 */
export const getRatingsDictionary = () => {
  return JSON.parse(API.get('ratings'))
}