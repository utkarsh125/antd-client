import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Email {
  sentAt: string; // Using string for date and time representation
  receiver: string;
  receivedAt: string;
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
    {
      id: '1', subject: 'Welcome to TrashMails!', sender: 'admin@trashmails.com', body: 'This is your first email!', read: false, folder: 'inbox',
      sentAt: '2024-08-01 10:00 AM',
      receiver: 'user@trashmails.com',
      receivedAt: '2024-08-01 10:05 AM'
    },
    {
      id: '2', subject: 'Weekly Newsletter', sender: 'news@trashmails.com', body: 'Here are some updates for you.', read: true, folder: 'inbox',
      sentAt: '2024-08-02 09:30 AM',
      receiver: 'user@trashmails.com',
      receivedAt: '2024-08-02 09:35 AM'
    },
    {
      id: '3', subject: 'Security Alert', sender: 'security@trashmails.com', body: 'Unusual login activity detected.', read: true, folder: 'inbox',
      sentAt: '2024-08-03 08:45 AM',
      receiver: 'user@trashmails.com',
      receivedAt: '2024-08-03 08:50 AM'
    },
    {
      id: '4', subject: 'Monthly Report', sender: 'reports@trashmails.com', body: 'Here is your monthly report.', read: false, folder: 'inbox',
      sentAt: '2024-08-04 07:20 AM',
      receiver: 'user@trashmails.com',
      receivedAt: '2024-08-04 07:25 AM'
    },
    {
      id: '5', subject: 'Draft Email', sender: 'me@trashmails.com', body: 'This is a draft email.', read: true, folder: 'drafts',
      sentAt: '',
      receiver: '',
      receivedAt: ''
    },
    {
      id: '6', subject: 'Sent Email', sender: 'me@trashmails.com', body: 'This is a sent email.', read: true, folder: 'sent',
      sentAt: '2024-08-04 01:00 PM',
      receiver: 'recipient@trashmails.com',
      receivedAt: '2024-08-04 01:05 PM'
    },
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
    markAsRead: (state, action: PayloadAction<string>) => {
      const email = state.emails.find(email => email.id === action.payload);
      if (email) {
        email.read = true;
      }
    },
    moveToTrash: (state, action: PayloadAction<string>) => {
      const email = state.emails.find(email => email.id === action.payload);
      if (email) {
        email.folder = 'trash';
      }
    },
    addEmail: (state, action: PayloadAction<Omit<Email, 'id'>>) => {
      const newEmail = {
        ...action.payload,
        id: `${state.emails.length + 1}`, // Generate new ID
        read: true, // New emails are initially read
      };
      state.emails.push(newEmail);
    },
  },
});

export const { selectEmail, markAsRead, moveToTrash, addEmail } = emailSlice.actions;

export default emailSlice.reducer;
