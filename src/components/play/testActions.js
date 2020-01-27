import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants';

export const increment = () =>
{return {
  type: INCREMENT_COUNTER,
}}

export const decrement = () =>
{return {
  type: DECREMENT_COUNTER,
}}