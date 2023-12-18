
interface Event {
  id: number
  api_model: string
  api_link: string
  title: string
  title_display: string
  image_url: string
  hero_caption: string
  short_description: string
  header_description: any
  list_description: string
  description: string
  location: string
  event_type_id: number
  alt_event_type_ids: any[]
  audience_id: number
  alt_audience_ids: any[]
  program_ids: number[]
  program_titles: string[]
  is_ticketed: boolean
  ticketed_event_id: number
  rsvp_link: string
  buy_button_text: string
  buy_button_caption: string
  is_registration_required: boolean
  is_member_exclusive: boolean
  is_sold_out: boolean
  is_free: boolean
  is_private: boolean
  is_admission_required: boolean
  is_after_hours: boolean
  is_virtual_event: boolean
  virtual_event_url: any
  virtual_event_passcode: any
  start_date: string
  end_date: string
  start_time: string
  end_time: string
  date_display: string
  door_time: any
  layout_type: number
  slug: string
  entrance: any
  join_url: any
  survey_url: any
  event_host_id: any
  event_host_title: any
  search_tags: any
  source_updated_at: string
  updated_at: string
  timestamp: string
}

export default Event