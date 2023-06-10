type AttemptsType = {
  ip_address?: string;
  device_type?: string;
};

export type LinkListType = {
  href: string;
  attempts: AttemptsType[];
};
