import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Email {
  id: string;
  subject: string;
  sender: string;
  body: string;
  read: boolean;
  folder: 'inbox' | 'sent' | 'drafts' | 'trash';
}

interface EmailState {
  emails: Email[];
  selectedEmailId: string | null;
}

const initialState: EmailState = {
  emails: [
    { id: '1', subject: 'Welcome to TrashMails!', sender: 'admin@trashmails.com', body: 'This is your first email!', read: false, folder: 'inbox' },
    { id: '2', subject: 'Weekly Newsletter', sender: 'news@trashmails.com', body: 'Here are some updates for you.', read: true, folder: 'inbox' },
    { id: '3', subject: 'Security Alert', sender: 'security@trashmails.com', body: 'Unusual login activity detected.', read: true, folder: 'inbox' },
    { id: '4', subject: 'Monthly Report', sender: 'reports@trashmails.com', body: 'Here is your monthly report.', read: false, folder: 'inbox' },
    { id: '5', subject: 'Draft Email', sender: 'me@trashmails.com', body: 'This is a draft email.', read: true, folder: 'drafts' },
    { id: '6', subject: 'Sent Email', sender: 'me@trashmails.com', body: 'This is a sent email.', read: true, folder: 'sent' },
  ],
  selectedEmailId: null,
};

export const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    selectEmail: (state, action: PayloadAction<string | null>) => {
      state.selectedEmailId = action.payload;
    },
    markAsRead: (state, action: PayloadAction<string | null>) => {
      const email = state.emails.find(email => email.id === action.payload);
      if (email) email.read = true;
    },
  },
});

export const { selectEmail, markAsRead } = emailSlice.actions;

export default emailSlice.reducer;
