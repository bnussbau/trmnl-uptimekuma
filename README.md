## ✅ Uptime Kuma for TRMNL

<img width="976" height="656" alt="image" src="https://github.com/user-attachments/assets/3a523818-4932-4857-b912-1749cd15105f" />

<img width="150" alt="image" src="https://usetrmnl.com/images/brand/badges/light/works-with-trmnl/trmnl-badge-works-with-light.svg" />

### Installation
* [https://usetrmnl.com/recipes/159393](https://usetrmnl.com/recipes/159393)

### Configuration

To use this recipe, you'll need to set in `.trmnlp.yml`:

1. **base_url**: Base Url of your Uptime Kuma instance 
2. **status_page_slug**: Slug of your Status Page (can be found in your Status Page Settings)
3. **display_incident** (optional, boolean): Display Incident Banner title and text, if set true

### Data Displayed

* Health Status (+ History)
* Uptime Percent in the last 24h
* Ping lowest / Ping highest
* If Cert is valid
* Tags


### Development
Can be served via [trmnlp](https://github.com/usetrmnl/trmnlp). Install trmnlp and run
```
trmnlp serve
```
