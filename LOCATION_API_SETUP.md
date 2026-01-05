# Location API Setup

This project uses the **CountryStateCity API** to fetch countries, states, and cities dynamically.

## API Information

- **API**: CountryStateCity API
- **Documentation**: https://countrystatecity.in/
- **Base URL**: `https://api.countrystatecity.in/v1`

## Free Tier

The API offers a free tier that doesn't require an API key for basic usage, but has rate limits.

### Getting an API Key (Recommended for Production)

1. Visit https://countrystatecity.in/
2. Sign up for a free account
3. Get your API key from the dashboard
4. Add it to your `.env` file:

```env
VITE_CSC_API_KEY=your_api_key_here
```

## Features

- ✅ 250+ countries
- ✅ States/provinces for all countries
- ✅ Cities for countries and states
- ✅ Automatic caching with React Query (24 hours)
- ✅ Fallback data if API fails
- ✅ No API key required for basic usage

## Usage

The API is automatically used in:
- **AffiliateForm** - Location selection
- **ContactForm** - Company location selection

## API Endpoints Used

- `GET /countries` - Get all countries
- `GET /countries/{countryCode}/states` - Get states for a country
- `GET /countries/{countryCode}/cities` - Get all cities for a country
- `GET /countries/{countryCode}/states/{stateCode}/cities` - Get cities for a state

## Rate Limits

**Free Tier (No API Key)**:
- Limited requests per day
- May experience rate limiting

**Free Tier (With API Key)**:
- 10,000 requests/month
- Better rate limits

## Caching

Data is cached using React Query:
- **Stale Time**: 24 hours
- **Cache Time**: 7 days
- Reduces API calls significantly

## Error Handling

If the API fails, the system:
1. Logs the error to console
2. Falls back to a basic country list
3. Continues to work (with limited data)

## Testing

To test the API integration:

1. Open the affiliate or contact form
2. Select a country from the dropdown
3. States/provinces should load automatically
4. Select a state/province
5. Cities should load automatically

## Troubleshooting

### API not working?

1. Check browser console for errors
2. Verify API is accessible: https://api.countrystatecity.in/v1/countries
3. Check network tab for failed requests
4. Add API key if you have one

### Slow loading?

- Data is cached, so subsequent loads are faster
- First load fetches from API
- Consider adding an API key for better rate limits

### Missing countries/states/cities?

- The API has comprehensive data, but some smaller locations might not be available
- Check the API documentation for coverage
- Consider using fallback data for specific cases

