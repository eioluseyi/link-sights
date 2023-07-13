type VerboseObjectType = { [key: string]: any };

type AttemptsType = {
  ip_address?: string;
  geolocation_data?: VerboseObjectType;
  device_type?: string;
  click_through_rate?: string;
  date_created?: string;
};

export type LinkListType = {
  href: string;
  attempts: AttemptsType[];
};
