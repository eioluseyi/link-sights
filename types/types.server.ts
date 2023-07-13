type VerboseObjectType = { [key: string]: any };

type AttemptsType = {
  ip_address?: string;
  geolocation_data?: VerboseObjectType;
  user_agent?: string;
  click_through_rate?: string;
  date_created?: string;
};

export type LinkListType = {
  href: URL;
  attempts: AttemptsType[];
};
