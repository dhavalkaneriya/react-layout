export const USER_STATUS = {
  ONLINE: 'Online',
  BUSY: 'Busy',
  AWAY: 'Away',
  OFFLINE: 'Offline',
  ON_CALL: 'On Call',
};

export const CALL_STATE = {
  CALLING: 'CALLING',
  INCOMING: 'INCOMING',
  ON_CALL: 'ON_CALL',
  OFFLINE: 'OFFLINE',
};

export const MESSAGE_TYPE = {
  CALL: 'call',
  MESSAGE: 'message',
  MISSED_CALL: 'missed-call',
  NO_ANSWER_CALL: 'no-answer-call',
};

export const MESSAGE_DIRECTION = {
  OUTBOUND: 'outbound',
  INBOUND: 'inbound',
};

export const CALL_DIRECTION = {
  OUTGOING: 'OUTGOING',
  INCOMING: 'INCOMING',
};

export const SIDEBAR_PAGE = {
  PROFILE: 'PROFILE',
  HUBSPOT: 'HUBSPOT',
  NOTE: 'NOTE',
  MERGE_CUSTOMER: 'MERGE_CUSTOMER',
};

export const SETTING_MENU = {
  COMPANY_PROFILE: { NAME: 'Company profile', INFO: 'Change the way you access your account' },
  GENERAL_SETTING: { NAME: 'General setting', INFO: 'Change the way the site works for you' },
  MANAGE_ROLES: { NAME: 'Manage roles', INFO: 'Ut augue lacinia at viverra' },
  MANAGE_TAGS: { NAME: 'Manage tags', INFO: 'Ut augue lacinia at viverra' },
};

export const REPORT_MENU = {
  AVERAGE_TIME_TO_RESPONSE: 'Average time to response',
  AVERAGE_TIME_ON_CASE: 'Average time on case',
  NUMBER_OF_CASES: 'Number of cases',
};
