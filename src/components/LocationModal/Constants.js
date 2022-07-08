export const Friends = [{ label: "Tokio", value: "Tokio", key: "1fr" },
{ label: "Rio", value: "Rio", key: "2fr" },
{ label: "Berlin", value: "Berlin", key: "3fr" },
{ label: "Nairobi", value: "Nairobi", key: "4fr" },
{ label: "Denver", value: "Denver", key: "5fr" },
{ label: "Stokholm", value: "Stokholm", key: "6fr" },
{ label: "Bogota", value: "Bogota", key: "7fr" },
{ label: "Manila", value: "Manila", key: "8fr" },
{ label: "Marseille", value: "Marseille", key: "9fr" },
{ label: "Oslo", value: "Oslo", key: "10fr" },
{ label: "Helsinki", value: "Helsinki", key: "11fr" },
{ label: "Palermo", value: "Palermo", key: "12fr" },
]

export const Days = [{ label: "Sunday", value: "Sunday", key: "7d" },
{ label: "Monday", value: "Monday", key: "1d" },
{ label: "Tuesday", value: "Tuesday", key: "2d" },
{ label: "Wednesday", value: "Wednesday", key: "3d" },
{ label: "Thursday", value: "Thursday", key: "4d" },
{ label: "Friday", value: "Friday", key: "5d" },
{ label: "Saturday", value: "Saturday", key: "6d" }]

export const Months = [{ label: "December", value: "December", key: "12m" },
{ label: "January", value: "January", key: "1m" },
{ label: "February", value: "February", key: "2m" },
{ label: "March", value: "March", key: "3m" },
{ label: "April", value: "April", key: "4m" },
{ label: "May", value: "May", key: "5m" },
{ label: "June", value: "June", key: "6m" },
{ label: "July", value: "July", key: "7m" },
{ label: "August", value: "August", key: "8m" },
{ label: "September", value: "September", key: "9m" },
{ label: "October", value: "October", key: "10m" },
{ label: "November", value: "November", key: "11m" },]

export const TimeZone = [{ value: "(GMT + 02:00) Vilnius", label: "(GMT + 02:00) Vilnius", key: "1tz" },
{ value: "(GMT + 03:00) Minsk", label: "(GMT + 03:00) Minsk", key: "2tz" },
{ value: "(GMT + 03:00) Nairobi", label: "(GMT + 03:00) Nairobi", key: "3tz" },
{ value: "(GMT + 03:00) Qatar", label: "(GMT + 03:00) Qatar", key: "4tz" },
{ value: "(GMT + 03:00) Riyad", label: "(GMT + 03:00) Riyad", key: "5tz" },
{ value: "(GMT + 03:00) Baghdad", label: "(GMT + 03:00) Baghdad", key: "6tz" }]


export const DaysSections = [{ label: "1-10", value: "1-10", key: "1sec" },
{ label: "11-20", value: "11-20", key: "2sec" },
{ label: "21-31", value: "21-31", key: "3sec" },]

export const AlertDescription = `Adding or removing a user might impact the user's configuration and leave information (e.g. the initial brought forward days).`
export const FirstTooltip = `This setting will determine if your leave balance will be reset based on the accounting year (company's fiscal year) or based on the employee's start date. Besides quotas, your roll-over policy will also be affected according to this setting.`
export const SecondTooltip = `Each year, the user's rolled over leaves will expire on the date you set. The quotas for each leave type are configured through the Leave Types section for this location and each can be set individually to allow or not allow roll overs.`
export const ThirdTooltip = `This default time zone is used throughout the system. For example for accurately displaying leave information in the calendar and for the system events listed in the Logs.`
export const FourthTooltip = `By making this Location the default one, all new team members will be automatically added to this Location.`
export const AlertMessage = `Once you've created a Location, assign a Leave Policy to the Location, in order to enable Users to request Leave.  To assign a Leave Policy, go to Location > Leave Policies > Assign Leave Policy.`