export const config = {
  method: 'GET',
  url: `/movies`,
  params: {
    api_key: 'ec18b0fe6ed5207389d7c5f45b12695824e373f0',
    format: 'json',
    limit: 10,
    offset: 0,
  },
}

export const errorResponseData = {
  data: {
    response: undefined,
    error: new Error('Network Error'),
    loading: false,
  },
}

export const loadingResponseData = {
  response: undefined,
  error: '',
  loading: true,
}

export const responseData = {
  loading: false,
  error: undefined,
  response: {
    error: 'OK',
    limit: 2,
    offset: 0,
    number_of_page_results: 2,
    number_of_total_results: 2503,
    status_code: 1,
    results: [
      {
        api_detail_url: 'https://comicvine.gamespot.com/api/movie/4025-1/',
        box_office_revenue: '107509799',
        budget: '130000000',
        date_added: '2009-07-08 10:55:50',
        date_last_updated: '2022-04-30 13:31:08',
        deck: "Adaptation of Moore and Gibbons' seminal miniseries.",
        description:
          '<p>The Watchmen, follows a group of retired superheros, as they attempt to foil a plot to kill off masked superheroes. As they race to find the killer, the Doomsday clock draws closer to Nuclear War. Soon they find themselves entangled in a web of lies and deceit, that just might save humanity, but at what cost. And just how far will they go to save the world?</p>',
        distributor: null,
        has_staff_review: null,
        id: 1,
        image: {
          icon_url:
            'https://comicvine.gamespot.com/a/uploads/square_avatar/0/42/868515-watchmen_final_poster.jpg',
          medium_url:
            'https://comicvine.gamespot.com/a/uploads/scale_medium/0/42/868515-watchmen_final_poster.jpg',
          screen_url:
            'https://comicvine.gamespot.com/a/uploads/screen_medium/0/42/868515-watchmen_final_poster.jpg',
          screen_large_url:
            'https://comicvine.gamespot.com/a/uploads/screen_kubrick/0/42/868515-watchmen_final_poster.jpg',
          small_url:
            'https://comicvine.gamespot.com/a/uploads/scale_small/0/42/868515-watchmen_final_poster.jpg',
          super_url:
            'https://comicvine.gamespot.com/a/uploads/scale_large/0/42/868515-watchmen_final_poster.jpg',
          thumb_url:
            'https://comicvine.gamespot.com/a/uploads/scale_avatar/0/42/868515-watchmen_final_poster.jpg',
          tiny_url:
            'https://comicvine.gamespot.com/a/uploads/square_mini/0/42/868515-watchmen_final_poster.jpg',
          original_url:
            'https://comicvine.gamespot.com/a/uploads/original/0/42/868515-watchmen_final_poster.jpg',
          image_tags: 'All Images,Watchmen',
        },
        name: 'Watchmen',
        producers: [
          {
            api_detail_url:
              'https://comicvine.gamespot.com/api/producer/4040-107931/',
            id: 107931,
            name: 'Deborah Snyder',
            site_detail_url:
              'https://comicvine.gamespot.com/deborah-snyder/4040-107931/',
          },
          {
            api_detail_url:
              'https://comicvine.gamespot.com/api/producer/4040-111156/',
            id: 111156,
            name: 'Lawrence Gordon',
            site_detail_url:
              'https://comicvine.gamespot.com/lawrence-gordon/4040-111156/',
          },
          {
            api_detail_url:
              'https://comicvine.gamespot.com/api/producer/4040-111157/',
            id: 111157,
            name: 'Lloyd Levin',
            site_detail_url:
              'https://comicvine.gamespot.com/lloyd-levin/4040-111157/',
          },
          {
            api_detail_url:
              'https://comicvine.gamespot.com/api/producer/4040-111158/',
            id: 111158,
            name: 'Wesley Collier',
            site_detail_url:
              'https://comicvine.gamespot.com/wesley-collier/4040-111158/',
          },
        ],
        rating: 'R',
        release_date: '2022-04-30 13:31:08',
        runtime: '162',
        site_detail_url: 'https://comicvine.gamespot.com/watchmen/4025-1/',
        studios: [
          {
            api_detail_url:
              'https://comicvine.gamespot.com/api/studio/4010-10/',
            id: 10,
            name: 'DC Comics',
            site_detail_url:
              'https://comicvine.gamespot.com/dc-comics/4010-10/',
          },
          {
            api_detail_url:
              'https://comicvine.gamespot.com/api/studio/4010-574/',
            id: 574,
            name: 'Warner Brothers',
            site_detail_url:
              'https://comicvine.gamespot.com/warner-brothers/4010-574/',
          },
          {
            api_detail_url:
              'https://comicvine.gamespot.com/api/studio/4010-4615/',
            id: 4615,
            name: 'Paramount Pictures',
            site_detail_url:
              'https://comicvine.gamespot.com/paramount-pictures/4010-4615/',
          },
        ],
        total_revenue: '185258983',
        writers: [
          {
            api_detail_url:
              'https://comicvine.gamespot.com/api/writer/4040-111154/',
            id: 111154,
            name: 'Alex Tse',
            site_detail_url:
              'https://comicvine.gamespot.com/alex-tse/4040-111154/',
          },
          {
            api_detail_url:
              'https://comicvine.gamespot.com/api/writer/4040-111155/',
            id: 111155,
            name: 'David Hayter',
            site_detail_url:
              'https://comicvine.gamespot.com/david-hayter/4040-111155/',
          },
        ],
      },
      {
        api_detail_url: 'https://comicvine.gamespot.com/api/movie/4025-2/',
        box_office_revenue: '134218018',
        budget: '55000000',
        date_added: '2009-07-08 10:57:51',
        date_last_updated: '2021-11-23 19:19:15',
        deck:
          'The 1978 film released by Warner Brothers was the first big-budget comic-to-film adaptation and became a blockbuster around the world, following in the footsteps of Star Wars.',
        description: null,
        distributor: null,
        has_staff_review: null,
        id: 2,
        image: {
          icon_url:
            'https://comicvine.gamespot.com/a/uploads/square_avatar/0/2/868526-superman.jpg',
          medium_url:
            'https://comicvine.gamespot.com/a/uploads/scale_medium/0/2/868526-superman.jpg',
          screen_url:
            'https://comicvine.gamespot.com/a/uploads/screen_medium/0/2/868526-superman.jpg',
          screen_large_url:
            'https://comicvine.gamespot.com/a/uploads/screen_kubrick/0/2/868526-superman.jpg',
          small_url:
            'https://comicvine.gamespot.com/a/uploads/scale_small/0/2/868526-superman.jpg',
          super_url:
            'https://comicvine.gamespot.com/a/uploads/scale_large/0/2/868526-superman.jpg',
          thumb_url:
            'https://comicvine.gamespot.com/a/uploads/scale_avatar/0/2/868526-superman.jpg',
          tiny_url:
            'https://comicvine.gamespot.com/a/uploads/square_mini/0/2/868526-superman.jpg',
          original_url:
            'https://comicvine.gamespot.com/a/uploads/original/0/2/868526-superman.jpg',
          image_tags: 'All Images',
        },
        name: 'Superman',
        producers: null,
        rating: 'PG',
        release_date: '2021-11-23 19:19:15',
        runtime: '143',
        site_detail_url: 'https://comicvine.gamespot.com/superman/4025-2/',
        studios: [
          {
            api_detail_url:
              'https://comicvine.gamespot.com/api/studio/4010-574/',
            id: 574,
            name: 'Warner Brothers',
            site_detail_url:
              'https://comicvine.gamespot.com/warner-brothers/4010-574/',
          },
        ],
        total_revenue: '300218018',
        writers: null,
      },
    ],
    version: '1.0',
  },
}
