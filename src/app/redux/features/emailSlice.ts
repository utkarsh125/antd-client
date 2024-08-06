import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Email {
  id: number;
  sender: string;
  subject: string;
  date: string;
  isRead: boolean;
  isStarred: boolean;
  isImportant: boolean;
  folder: 'primary' | 'promotions' | 'social' | 'updates' | 'trash' | 'sent';
  content: string;
}

interface EmailState {
  emails: Email[];
  filter: 'primary' | 'promotions' | 'social' | 'updates' | 'trash' | 'sent';
  selectedEmail: Email | null;
}

const initialState: EmailState = {
  emails: [
    { id: 1, sender: 'Google Payments', subject: 'Your invoice is available', date: '02 Aug, 2024', isRead: false, isStarred: false, isImportant: false, folder: 'primary', content: 'Your invoice details are as follows...' },
    { id: 2, sender: 'Google Cloud', subject: 'Action Required', date: '31 Jul, 2024', isRead: true, isStarred: true, isImportant: false, folder: 'primary', content: 'Please review the following...' },
    { id: 3, sender: 'Amazon', subject: 'Your order has shipped', date: '29 Jul, 2024', isRead: false, isStarred: false, isImportant: false, folder: 'promotions', content: 'Your order details are as follows...' },
    { id: 4, sender: 'LinkedIn', subject: 'New job opportunities', date: '28 Jul, 2024', isRead: true, isStarred: false, isImportant: true, folder: 'social', content: 'Check out these new job listings...' },
    { id: 5, sender: 'Github', subject: 'New repository created', date: '27 Jul, 2024', isRead: false, isStarred: false, isImportant: false, folder: 'updates', content: 'A new repository has been created in your account...' },
    { id: 6, sender: 'Service Desk', subject: 'Your ticket has been resolved', date: '26 Jul, 2024', isRead: true, isStarred: true, isImportant: true, folder: 'primary', content: 'Your support ticket has been resolved...' },
    { id: 7, sender: 'Newsletter', subject: 'Weekly Update', date: '25 Jul, 2024', isRead: false, isStarred: false, isImportant: false, folder: 'promotions', content: 'Here is your weekly update...' },
    { id: 8, sender: 'Team', subject: 'Meeting Reminder', date: '24 Jul, 2024', isRead: false, isStarred: false, isImportant: true, folder: 'social', content: 'Reminder for the team meeting tomorrow...' },
    { id: 9, sender: 'Service', subject: 'Subscription Expired', date: '23 Jul, 2024', isRead: true, isStarred: true, isImportant: true, folder: 'updates', content: 'Your subscription has expired...' },
    { id: 10, sender: 'NoReply', subject: 'Do not reply', date: '22 Jul, 2024', isRead: true, isStarred: false, isImportant: false, folder: 'trash', content: 'This is an automated email...' },
    { id: 11, sender: 'John Doe', subject: 'Meeting Agenda', date: '21 Jul, 2024', isRead: false, isStarred: false, isImportant: false, folder: 'sent', content: 'Please find the meeting agenda attached...' },
  ],
  filter: 'primary',
  selectedEmail: null,
};

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    toggleRead(state, action: PayloadAction<number>) {
      const email = state.emails.find((e) => e.id === action.payload);
      if (email) email.isRead = !email.isRead;
    },
    toggleStarred(state, action: PayloadAction<number>) {
      const email = state.emails.find((e) => e.id === action.payload);
      if (email) email.isStarred = !email.isStarred;
    },
    toggleImportant(state, action: PayloadAction<number>) {
      const email = state.emails.find((e) => e.id === action.payload);
      if (email) email.isImportant = !email.isImportant;
    },
    moveToTrash(state, action: PayloadAction<number>) {
      const email = state.emails.find((e) => e.id === action.payload);
      if (email) email.folder = 'trash';
    },
    setFilter(state, action: PayloadAction<EmailState['filter']>) {
      state.filter = action.payload;
    },
    setSelectedEmail(state, action: PayloadAction<number | null>) {
      state.selectedEmail = state.emails.find((e) => e.id === action.payload) || null;
    },
    sendEmail(state, action: PayloadAction<Email>) {
      state.emails.push(action.payload);
    },
  },
});

export const { toggleRead, toggleStarred, toggleImportant, moveToTrash, setFilter, setSelectedEmail, sendEmail } = emailSlice.actions;
export default emailSlice.reducer;
