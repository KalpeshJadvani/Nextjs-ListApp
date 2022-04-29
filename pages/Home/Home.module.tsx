export type InitialState = {
  results: ItemModel[];
  query: string;
  totalItems: number;
  startIndex: number;
  totalPage: number;
  page: number;
};

export type RocketModel = {
  first_stage: {
    cores: {
      core_serial: string;
    }[];
  };
  second_stage: {
    payloads: {
      payload_id: string;
    }[];
  };
};

export type ItemModel = {
  flight_number: number;
  mission_name: string;
  launch_date_utc: string;
  launch_date_unix: string;
  rocket: RocketModel;
  links: {
    mission_patch_small: string;
  };
  launch_success: boolean;
  launch_failure_details: {
    reason: string;
  };
};
