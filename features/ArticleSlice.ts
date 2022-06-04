import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ArticleState, Font } from "~/interfaces/Article";

const ArticleFontSizes = {
  default: {
    title: "2xl",
    paragraph: "base",
  },
  medium: {
    title: "xl",
    paragraph: "sm",
  },
  small: {
    title: "lg",
    paragraph: "xs",
  },
};
const options = {
  name: "article",
  initialState: {
    fontSize: ArticleFontSizes.default,
    activeFontSize: "default",
  },
  reducers: {
    setFont: (state: ArticleState, action: PayloadAction<{ type: string }>) => {
      const { type } = action.payload;
      Object.entries(ArticleFontSizes).forEach(([key, value]) => {
        if (key === type) {
          state.fontSize = value;
          state.activeFontSize = type;
        }
      });
    },
  },
};

export const ArticleSlice = createSlice(options);
export default ArticleSlice.reducer;
export const { setFont } = ArticleSlice.actions;
