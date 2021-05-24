/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';

 describe('push to history', () => {
    //test settings case
    test('settings case', () => {
      expect(pushToHistory('settings', 1).state.page).toBe('settings');
      expect(window.history.length).toBe(2);
    });
    //test entry case
    test('entry case', () => {
        expect(pushToHistory('entry', 2).state.page).toBe('entry2');
        expect(window.history.length).toBe(3);
      
    });
    //test defualt case
    test('default case', () => {
        expect(pushToHistory('',1).state.page).toBe(undefined);
        expect(window.history.length).toBe(4);
        
      });
  });