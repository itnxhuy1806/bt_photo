type ApiResponse<T> = {
  data: T;
};

type GetPhoto = {
  params: { limit: number; page: number; searchValue?: string };
  response: {
    data: { text: string }[];
    total: number;
  };
};

const photos = [...Array(100)].map((_, index) => ({ text: `Photo ${index + 1}` }));

export const photoApi = {
  getPhotos: ({ limit, page, searchValue }: GetPhoto["params"]) => {
    return new Promise<ApiResponse<GetPhoto["response"]>>((resolve) => {
      let response = photos;
      let total = 0;
      if (limit === 0 || page === 0) {
        setTimeout(() => resolve({ data: { data: [], total: 0 } }), 100);
      }
      if (typeof searchValue === "string") {
        response = response.filter((item) => item.text.includes(searchValue));
        total = Math.ceil(response.length / limit);
      }
      response = response.filter((_, index) => index < page * limit && index >= (page - 1) * limit);
      setTimeout(() => resolve({ data: { data: response, total } }), 100);
    });
  },
};
