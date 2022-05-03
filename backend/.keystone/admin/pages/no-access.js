import React from 'react';

import { NoAccessPage } from '@keystone-6/admin-ui/pages/NoAccessPage';

export default function Home() {
  return <NoAccessPage sessionsEnabled={true} />;
}
