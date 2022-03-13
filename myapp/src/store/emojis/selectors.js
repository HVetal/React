import { FETCH_STATUSES } from "../../components/utils/constants";

export const selectEmojis = (state) => state.emojis.data;
export const selectEmojisLoading = (state) => state.emojis.status === FETCH_STATUSES.REQUEST;
export const selectError = (state) => state.emojis.error;