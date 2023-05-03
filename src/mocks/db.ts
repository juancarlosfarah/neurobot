import type { Database, LocalContext, Member } from '@graasp/apps-query-client';

import { v4 } from 'uuid';

import { DEFAULT_LOCAL_CONTEXT } from '@/config/context';
import { API_HOST } from '@/config/env';

export const mockContext: LocalContext = {
  apiHost: API_HOST,
  permission: 'admin',
  context: DEFAULT_LOCAL_CONTEXT,
  itemId: '1234-1234-123456-8123-123456',
  memberId: v4(),
};

export const mockMembers: Member[] = [
  {
    id: mockContext.memberId || v4(),
    name: 'ID-123',
    email: '',
    extra: {},
  },
];

const buildDatabase = (
  appContext: Partial<LocalContext>,
  members?: Member[],
): Database => ({
  appData: [],
  appActions: [],
  members: members ?? mockMembers,
  appSettings: [],
});

export default buildDatabase;
