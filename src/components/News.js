// import React, { Component } from "react";
// import NewsItem from "./NewsItem";

// export class News extends Component {
//   articles = [
//     {
//       source: { id: "the-washington-post", name: "The Washington Post" },
//       author: "Sandra G. Boodman",
//       title:
//         "Hallucinations, headaches, bizarre behavior shadow a teen’s pregnancy - The Washington Post",
//       description:
//         "A California teenager’s splitting headaches, violent nausea and sudden bizarre behavior were erroneously brushed off as temporary signs of pregnancy.",
//       url: "https://www.washingtonpost.com/wellness/2024/01/20/pregnancy-hallucinations-headaches-medical-mysteries/",
//       urlToImage:
//         "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZLS7UQ33ORFKHAU2LRCF6LVBHY.jpg&w=1440",
//       publishedAt: "2024-01-20T14:15:19Z",
//       content:
//         "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nOn the day after Christmas 2021, Abigail Aguilar, 18, and nearly three months pregnant, walked into her mothers bedroom and in a flat,… [+12681 chars]",
//     },
//     {
//       source: { id: "usa-today", name: "USA Today" },
//       author: "Safid Deen",
//       title:
//         "What NFL playoff games are today? Saturday matchups to watch - USA TODAY",
//       description:
//         "The top seeds in the AFC and NFC make their 2023 playoff debuts in the divisional round against upstart teams eager for the upset.",
//       url: "https://www.usatoday.com/story/sports/nfl/2024/01/20/what-nfl-playoff-games-today-saturday-jan-20/72254901007/",
//       urlToImage:
//         "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/01/17/USAT/72256158007-lamar-49-ers-0117.jpg?crop=6897,3882,x0,y0&width=3200&height=1802&format=pjpg&auto=webp",
//       publishedAt: "2024-01-20T12:02:56Z",
//       content:
//         "The NFL is back again with two more playoff games Saturday with shots to play in the AFC and NFC championship games on the line.\r\nAnd the No. 1 seeds from both sides will be in action.\r\nFirst up, MVP… [+2880 chars]",
//     },
//     {
//       source: { id: null, name: "ZDNet" },
//       author: "June Wan",
//       title:
//         "Samsung Unpacked 2024 recap: Galaxy AI, S24 Ultra, Smart Ring, and more - ZDNet",
//       description:
//         "This week's Samsung event saw the unveiling of new Galaxy S24 phones, the company's own generative AI model, and its first-ever smart ring.",
//       url: "https://www.zdnet.com/article/samsung-unpacked-2024-recap-galaxy-ai-s24-ultra-smart-ring-and-more/",
//       urlToImage:
//         "https://www.zdnet.com/a/img/resize/0957b65c1c6c17ed3d68925cb804f1f5fd161796/2024/01/14/e02c09ef-5310-4acb-97e1-07f9910294b0/dsc00892.jpg?auto=webp&fit=crop&height=675&width=1200",
//       publishedAt: "2024-01-20T12:00:00Z",
//       content:
//         "Samsung is releasing three Galaxy S models this time around. While the standard and Plus models have never been as flashy as the Ultra, the company's added several feature upgrades this year that mak… [+1953 chars]",
//     },
//     {
//       source: { id: null, name: "Page Six" },
//       author: "Nika Shakhnazarova",
//       title:
//         "'Emily in Paris' star Ashley Park shares update after going into 'critical septic shock' on vacation - Page Six",
//       description:
//         "The actress, who plays Mindy Chen in the hit Netflix series, revealed that she was transferred from the Maldives to Dubai to receive treatment for her condition.",
//       url: "https://pagesix.com/2024/01/20/entertainment/emily-in-paris-star-ashley-park-shares-update-after-going-into-critical-septic-shock/",
//       urlToImage:
//         "https://pagesix.com/wp-content/uploads/sites/3/2024/01/newspress-collage-cd83u5i3l-1705747824768.jpg?quality=75&strip=all&1705729990&w=1024",
//       publishedAt: "2024-01-20T11:19:00Z",
//       content:
//         "Emily in Paris star Ashley Park is feeling grateful as she continues to recover from a “critical septic shock” that happened during her vacation with her co-star and boyfriend, Paul Forman.\r\nThe actr… [+2443 chars]",
//     },
//     {
//       source: { id: null, name: "BBC News" },
//       author: null,
//       title:
//         "Senior Iran Revolutionary Guard officials killed in strike blamed on Israel - BBC.com",
//       description:
//         "The Revolutionary Guard blames Israel for the strike in the Syrian capital which killed four senior advisers.",
//       url: "https://www.bbc.com/news/world-middle-east-68040493",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/1461F/production/_132378438_gettyimages-1938773511-1.jpg",
//       publishedAt: "2024-01-20T11:08:00Z",
//       content:
//         "People and security forces gather in front of a building destroyed in an explosion in Damascus on Saturday\r\nFour senior members of Iran's security forces have been killed in a suspected air strike on… [+4167 chars]",
//     },
//     {
//       source: { id: "abc-news", name: "ABC News" },
//       author: "Habibullah Khan, Morgan Winsor",
//       title: "What is happening between Iran and Pakistan? - ABC News",
//       description:
//         "Regional analysts say there are implications for the wider Middle East region.",
//       url: "https://abcnews.go.com/International/iran-pakistan-airstrikes-middle-east-tensions-explained/story?id=106509031",
//       urlToImage:
//         "https://i.abcnewsfe.com/a/4392e613-6a72-49ff-869e-4966b910e914/iran-pakistan-gty-thg-240119_1705674349747_hpMain_16x9.jpg?w=1600",
//       publishedAt: "2024-01-20T09:15:04Z",
//       content:
//         "ISLAMABAD and LONDON -- An unprecedented turn of events took place between Iran and Pakistan this week when the neighboring nations exchanged cross-border airstrikes on what they claim were militant … [+4720 chars]",
//     },
//     {
//       source: { id: null, name: "Daily Beast" },
//       author: "Kaisar Andrabi, Bhat Burhan",
//       title:
//         "Ram Mandir: Humiliating Shock for Narendra Modi's Mega-Hyped Vanity Project - The Daily Beast",
//       description:
//         "Concrete dust, temporary barriers and furious last-minute work mean PM Narendra Modi’s vast Hindu temple complex still looks like a construction site for the grand opening.",
//       url: "https://www.thedailybeast.com/ram-mandir-humiliating-shock-for-narendra-modis-mega-hyped-vanity-project",
//       urlToImage:
//         "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_2214,w_3936,x_0,y_234/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1705690582/24019-buhran-shcok-modi-vanity-hero_d2g7ch",
//       publishedAt: "2024-01-20T08:26:19Z",
//       content:
//         "AYODHYA, IndiaIt was supposed to be an iconic moment to cement Prime Minister Narendra Modis place as one of the greatest Hindu nationalists in Indian history, but despite all the fanfare and celebra… [+12623 chars]",
//     },
//     {
//       source: { id: null, name: "DW (English)" },
//       author: "Deutsche Welle",
//       title:
//         "Microsoft says Russian hackers accessed executives' emails - DW (English)",
//       description:
//         "The hacker group believed to responsible for the breach was previously linked to Russia's foreign intelligence agency. Microsoft confirmed that the hackers did not access any customer accounts.",
//       url: "https://www.dw.com/en/microsoft-says-russian-hackers-accessed-executives-emails/a-68040200",
//       urlToImage: "https://static.dw.com/image/63450019_6.jpg",
//       publishedAt: "2024-01-20T07:45:30Z",
//       content:
//         "A Russian hacking group gained access to Microsoft's corporate email system and accessed the accounts of senior executives, the company said Friday evening.\r\nMicrosoft believes the Russian state-spon… [+1592 chars]",
//     },
//     {
//       source: { id: null, name: "Suntimes.com" },
//       author: "Georgia Nicols",
//       title: "Horoscope for Saturday, Jan. 20, 2024 - Chicago Sun-Times",
//       description: null,
//       url: "https://chicago.suntimes.com/2024/1/20/24033670/horoscopes-today-saturday-jan-20-2024",
//       urlToImage:
//         "https://cst.brightspotcdn.com/dims4/default/a8c03a3/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FHahWoqLBrbWWAO6iP77SNODLV8c%3D%2F0x0%3A870x630%2F870x630%2Ffilters%3Afocal%28435x315%3A436x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F25217905%2FGeorgia_mug.jpeg",
//       publishedAt: "2024-01-20T06:01:56Z",
//       content:
//         "Moon Alert\r\nAvoid shopping or important decisions from 7:30 to 8 a.m. Chicago time. After that, the moon moves from Taurus into Gemini\r\nAries (March 21-April 19)\r\nToday a subtle shift takes place tha… [+3689 chars]",
//     },
//     {
//       source: { id: "espn", name: "ESPN" },
//       author: "Tim Bontemps",
//       title: "Jokic, Murray help Nuggets end Celtics' unbeaten home run - ESPN",
//       description:
//         "Nikola Jokic, playing two days after the death of Dejan Milojevic, his former coach in Serbia, had 34 points, 12 rebounds and 9 assists as Denver handed Boston its first home loss of the season in a game that had all the lookings of an NBA Finals clash.",
//       url: "https://www.espn.com/nba/story/_/id/39346418/jokic-murray-help-nuggets-end-celtics-unbeaten-home-run",
//       urlToImage:
//         "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0120%2Fr1279729_1296x729_16%2D9.jpg",
//       publishedAt: "2024-01-20T05:27:00Z",
//       content:
//         "BOSTON -- Denver Nuggets superstar Nikola Jokic spent the two days leading up to Friday night's clash with the Boston Celtics grieving the death of Golden State Warriors assistant Dejan Milojevic.\r\nH… [+5365 chars]",
//     },
//     {
//       source: { id: "cbs-news", name: "CBS News" },
//       author: "Faris Tanyos",
//       title:
//         "U.S. teen fatally shot in West Bank by Israeli forces, Palestinian officials say - CBS News",
//       description:
//         'The State Department confirmed that it has reached out to Israeli officials "for further information."',
//       url: "https://www.cbsnews.com/news/us-teen-fatally-shot-west-bank/",
//       urlToImage:
//         "https://assets3.cbsnewsstatic.com/hub/i/r/2021/10/22/ff9c4cb3-8c7b-4180-ae49-596b31dc89b4/thumbnail/1200x630/269009b5bca15082f6e6a3f0f477e1cb/gettyimages-88961749.jpg?v=47479038714af14683e43d6675dccca0",
//       publishedAt: "2024-01-20T05:01:00Z",
//       content:
//         "A Palestinian-American teenager was shot and killed Friday by Israeli troops in the West Bank, Palestinian officials told Reuters. \r\nThe 17-year-old boy was shot during clashes with Israeli forces, t… [+969 chars]",
//     },
//     {
//       source: { id: null, name: "The Athletic" },
//       author: "Ben Pickman",
//       title:
//         "Stanford’s Tara VanDerveer ties Coach K for most wins by college basketball coach - The Athletic",
//       description:
//         "Stanford beat Oregon to give coach Tara VanDerveer 1,202 wins, tying former Duke coach Mike Krzyzewski's all-time record.",
//       url: "https://theathletic.com/5201851/2024/01/19/tara-vanderveer-wins-record-coach-k-stanford/",
//       urlToImage:
//         "https://cdn.theathletic.com/app/uploads/2024/01/19233144/GettyImages-1920705022-scaled.jpg",
//       publishedAt: "2024-01-20T04:58:13Z",
//       content:
//         "Stanford coach Tara VanDerveer tied former Duke coach Mike Krzyzewskis record for most wins by a coach in college basketball history (mens or womens) with the No. 8 Cardinals 88-63 victory over Orego… [+2934 chars]",
//     },
//     {
//       source: { id: null, name: "YouTube" },
//       author: null,
//       title: "Rain coming this weekend to Southern California - ABC7",
//       description:
//         "Southern California should expect several days of rain this weekend. Dallas Raines explains what to expect. https://abc7.com/los-angeles-weather-forecast-cal...",
//       url: "https://www.youtube.com/watch?v=g574lnM-ylY",
//       urlToImage: "https://i.ytimg.com/vi/g574lnM-ylY/maxresdefault.jpg",
//       publishedAt: "2024-01-20T04:41:40Z",
//       content: null,
//     },
//     {
//       source: { id: null, name: "YouTube" },
//       author: null,
//       title:
//         "FULL MATCH – Randy Orton vs. Solo Sikoa: SmackDown highlights, Jan. 19, 2024 - WWE",
//       description:
//         "The Viper goes head to head with Solo Sikoa looking for an enormous win en route to the Undisputed WWE Universal Championship Fatal 4-Way Match against Roman...",
//       url: "https://www.youtube.com/watch?v=Q4AAt-6k7wQ",
//       urlToImage: "https://i.ytimg.com/vi/Q4AAt-6k7wQ/maxresdefault.jpg",
//       publishedAt: "2024-01-20T04:14:46Z",
//       content: null,
//     },
//     {
//       source: { id: "cbs-news", name: "CBS News" },
//       author: null,
//       title:
//         "Andrew Cuomo sues New York attorney general for documents in sexual misconduct investigation - CBS News",
//       description:
//         "The former governor, once a rising star in the Democratic Party, resigned in 2021 after a report by the attorney general's office concluded he sexually harassed at least 11 women.",
//       url: "https://www.cbsnews.com/news/andrew-cuomo-sues-new-york-attorney-general-letitia-james/",
//       urlToImage:
//         "https://assets3.cbsnewsstatic.com/hub/i/r/2023/11/24/0d1e1ef0-93de-4b7d-8114-f2a5630c1d77/thumbnail/1200x630/573e29e760daaddeb73568517a81c54a/ap23254644936997.jpg?v=47479038714af14683e43d6675dccca0",
//       publishedAt: "2024-01-20T03:40:37Z",
//       content:
//         "Former New York Gov. Andrew Cuomo is suing state Attorney General Letitia James to force her to release interviews from the damaging sexual misconduct investigation that led to his resignation.\r\nCuom… [+1850 chars]",
//     },
//     {
//       source: { id: null, name: "9to5Mac" },
//       author: "Zac Hall",
//       title:
//         "Apple updates Vision Pro tech specs to correct video mirroring AirPlay quality - 9to5Mac",
//       description:
//         "Apple revealed Vision Pro tech specs today as pre-orders went live in the United States. One specification appears to have...",
//       url: "https://9to5mac.com/2024/01/19/vision-pro-video-mirroring-resolution/",
//       urlToImage:
//         "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/vision-pro-tour.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
//       publishedAt: "2024-01-20T01:57:00Z",
//       content:
//         "Apple revealed Vision Pro tech specs today as pre-orders went live in the United States. One specification appears to have been published with an error, however, as the tech specs page has changed si… [+878 chars]",
//     },
//     {
//       source: { id: "the-washington-post", name: "The Washington Post" },
//       author: "Amy B Wang, Maegan Vazquez, Azi Paybarah",
//       title:
//         "Trump lobs racially charged attacks against Haley ahead of N.H. primary - The Washington Post",
//       description:
//         "Writing on Truth Social, Trump repeatedly referred to Haley as “Nimbra,” an apparent intentional misspelling of her birth name.",
//       url: "https://www.washingtonpost.com/politics/2024/01/19/trump-haley-race/",
//       urlToImage:
//         "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/Z6JDWNL5JG4LUQ24S2H3A5TIWE_size-normalized.jpg&w=1440",
//       publishedAt: "2024-01-20T01:26:00Z",
//       content:
//         "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nFormer president Donald Trump is lobbing racially charged attacks at Republican rival Nikki Haley, a daughter of Indian immigrants who… [+8069 chars]",
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "ámbito.com",
//         "title": "El creador de Ethereum, Vitalik Buterin, dijo que Milei \"hizo que sea cool volver a hablar de la economía\" - ámbito.com",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMiiQFodHRwczovL3d3dy5hbWJpdG8uY29tL3RlY25vbG9naWEvZWwtY3JlYWRvci1ldGhlcmV1bS12aXRhbGlrLWJ1dGVyaW4tZGlqby1xdWUtbWlsZWktaGl6by1xdWUtc2VhLWNvb2wtdm9sdmVyLWhhYmxhci1sYS1lY29ub21pYS1uNTkyNjIzM9IBiQFodHRwczovL3d3dy5hbWJpdG8uY29tL3RlY25vbG9naWEvZWwtY3JlYWRvci1ldGhlcmV1bS12aXRhbGlrLWJ1dGVyaW4tZGlqby1xdWUtbWlsZWktaGl6by1xdWUtc2VhLWNvb2wtdm9sdmVyLWhhYmxhci1sYS1lY29ub21pYS1uNTkyNjIzMw?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T20:22:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "news.com.au",
//         "title": "Urgent recall of Dan Murphy’s, BWS product - news.com.au",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMipQFodHRwczovL3d3dy5uZXdzLmNvbS5hdS9saWZlc3R5bGUvZm9vZC9mb29kLXdhcm5pbmdzL2Rhbi1tdXJwaHlzLWFuZC1id3MtdXJnZW50bHktcmVjYWxsLXBvcHVsYXItZ3JleS1nb29zZS12b2RrYS1wcm9kdWN0L25ld3Mtc3RvcnkvYWU2Y2ExY2UyYzYyNGRhMGYxYzc4ZTIyYjIyZjFkOGPSAQA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T20:20:09Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "news.com.au",
//         "title": "Melbourne home's stairs built into kitchen bench sparks outrage | news.com.au — Australia's leading news site - news.com.au",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMimAFodHRwczovL3d3dy5uZXdzLmNvbS5hdS9maW5hbmNlL3JlYWwtZXN0YXRlL21lbGJvdXJuZS12aWMvbWVsYm91cm5lLWhvbWVzLWRlYXRoLXN0YWlycy1kZXNpZ24tc3BhcmtzLW91dHJhZ2UvbmV3cy1zdG9yeS81YjE2NTZkMGRkYzUwNmRjOWVkMTcwN2E2OWI5ODU4MdIBAA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T20:15:38Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "Edital Concursos Brasil",
//         "title": "Contribuinte registrado na Dívida Ativa pode obter até 70% de desconto - Edital Concursos Brasil",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMifGh0dHBzOi8vZWRpdGFsY29uY3Vyc29zYnJhc2lsLmNvbS5ici9ub3RpY2lhcy8yMDI0LzAxL2NvbnRyaWJ1aW50ZS1yZWdpc3RyYWRvLW5hLWRpdmlkYS1hdGl2YS1wb2RlLW9idGVyLWF0ZS03MC1kZS1kZXNjb250by_SAQA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T19:38:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "BM&C NEWS",
//         "title": "4 Passos para alcançar o primeiro milhão em 2024; dica bônus no Final - BM&C NEWS",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vYm1jbmV3cy5jb20uYnIvMjAyNC8wMS8yMC80LXBhc3Nvcy1wYXJhLWFsY2FuY2FyLW8tcHJpbWVpcm8tbWlsaGFvLWVtLTIwMjQtZGljYS1ib251cy1uby1maW5hbC_SAQA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T19:34:18Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "Edital Concursos Brasil",
//         "title": "Como guardar cerveja na geladeira em 10 segundos: e como gelá-la mais rápido - Edital Concursos Brasil",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMiggFodHRwczovL2VkaXRhbGNvbmN1cnNvc2JyYXNpbC5jb20uYnIvbm90aWNpYXMvMjAyNC8wMS9jb21vLWd1YXJkYXItY2VydmVqYS1uYS1nZWxhZGVpcmEtZW0tMTAtc2VndW5kb3MtZS1jb21vLWdlbGEtbGEtbWFpcy1yYXBpZG8v0gEA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T19:23:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "AS ",
//         "title": "El truco matemático para elegir la cola del supermercado que más rápido va a ir - AS ",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMidWh0dHBzOi8vYXMuY29tL2FjdHVhbGlkYWQvc29jaWVkYWQvZWwtdHJ1Y28tbWF0ZW1hdGljby1wYXJhLWVsZWdpci1sYS1jb2xhLWRlbC1zdXBlcm1lcmNhZG8tcXVlLW1hcy1yYXBpZG8tdmEtYS1pci1uL9IBhAFodHRwczovL2FzLmNvbS9hY3R1YWxpZGFkL3NvY2llZGFkL2VsLXRydWNvLW1hdGVtYXRpY28tcGFyYS1lbGVnaXItbGEtY29sYS1kZWwtc3VwZXJtZXJjYWRvLXF1ZS1tYXMtcmFwaWRvLXZhLWEtaXItbi8_b3V0cHV0VHlwZT1hbXA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T19:21:10Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "بلد نيوز",
//         "title": "اليورو بكام انهاردة؟.. توقعات سعر اليورو مقابل الجنيه المصري اليوم السبت 20 يناير 2024 في السوق السوداء - بلد نيوز",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMi6AFodHRwczovL2dhdGUuYmFsZC1uZXdzLmNvbS8yMzE5NDYvJUQ4JUFBJUQ5JTg4JUQ5JTgyJUQ4JUI5JUQ4JUE3JUQ4JUFBLSVEOCVCMyVEOCVCOSVEOCVCMS0lRDglQTclRDklODQlRDklOEElRDklODglRDglQjElRDklODgtJUQ5JTg1JUQ5JTgyJUQ4JUE3JUQ4JUE4JUQ5JTg0LSVEOCVBNyVEOSU4NCVEOCVBQyVEOSU4NiVEOSU4QSVEOSU4Ny0lRDglQTclRDklODQlRDklODUlRDglQjUlRDglQjElRDklOEEv0gHsAWh0dHBzOi8vZ2F0ZS5iYWxkLW5ld3MuY29tLzIzMTk0Ni8lRDglQUElRDklODglRDklODIlRDglQjklRDglQTclRDglQUEtJUQ4JUIzJUQ4JUI5JUQ4JUIxLSVEOCVBNyVEOSU4NCVEOSU4QSVEOSU4OCVEOCVCMSVEOSU4OC0lRDklODUlRDklODIlRDglQTclRDglQTglRDklODQtJUQ4JUE3JUQ5JTg0JUQ4JUFDJUQ5JTg2JUQ5JThBJUQ5JTg3LSVEOCVBNyVEOSU4NCVEOSU4NSVEOCVCNSVEOCVCMSVEOSU4QS9hbXAv?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T19:16:46Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "السعودية نيوز",
//         "title": "100 ألف جنيه.... فوائد شهادات البنك الأهلي بعد طرح الشهادة البلاتينية الجديدة – السعودية نيوز - السعودية نيوز",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMi5wFodHRwczovL3Byby5hbHNhdWRpbmV3cy5jb20vNjUzNzMvMTAwLSVEOCVBMyVEOSU4NCVEOSU4MS0lRDglQUMlRDklODYlRDklOEElRDklODctJUQ5JTgxJUQ5JTg4JUQ4JUE3JUQ4JUE2JUQ4JUFGLSVEOCVCNCVEOSU4NyVEOCVBNyVEOCVBRiVEOCVBNyVEOCVBQS0lRDglQTclRDklODQlRDglQTglRDklODYlRDklODMtJUQ4JUE3JUQ5JTg0JUQ4JUEzJUQ5JTg3JUQ5JTg0JUQ5JThBLSVEOCVBOCVEOCVCOS_SAesBaHR0cHM6Ly9wcm8uYWxzYXVkaW5ld3MuY29tLzY1MzczLzEwMC0lRDglQTMlRDklODQlRDklODEtJUQ4JUFDJUQ5JTg2JUQ5JThBJUQ5JTg3LSVEOSU4MSVEOSU4OCVEOCVBNyVEOCVBNiVEOCVBRi0lRDglQjQlRDklODclRDglQTclRDglQUYlRDglQTclRDglQUEtJUQ4JUE3JUQ5JTg0JUQ4JUE4JUQ5JTg2JUQ5JTgzLSVEOCVBNyVEOSU4NCVEOCVBMyVEOSU4NyVEOSU4NCVEOSU4QS0lRDglQTglRDglQjkvYW1wLw?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T19:16:26Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "Al Masry Al Youm - المصري اليوم",
//         "title": "عيار 21 الآن.. سعر الذهب اليوم السبت 20-1-2024 بعد انخفاض كبير - Al Masry Al Youm - المصري اليوم",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMiMmh0dHBzOi8vd3d3LmFsbWFzcnlhbHlvdW0uY29tL25ld3MvZGV0YWlscy8zMDgxNDU30gEA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T19:16:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "news.com.au",
//         "title": "‘No support’: Sad truth about ‘Aussie’ beer - news.com.au",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMizAFodHRwczovL3d3dy5uZXdzLmNvbS5hdS9maW5hbmNlL3NtYWxsLWJ1c2luZXNzL2F1c3RyYWxpYXMtY3JhZnQtYmVlci1zeXN0ZW0tYXQtYnJpbmstb2YtY29sbGFwc2UtYXMtYnJld2VyaWVzLWxvc2UtYmF0dGxlLXRvLW11bHRpbWlsbGlvbi1kb2xsYXItb3ZlcnNlYXMtZ2lhbnRzL25ld3Mtc3RvcnkvYjM0MzQ2OTc5ZTk2NmE0MWIyZDNjMThmODU3MmMxY2TSAQA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T19:07:54Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "Cointelegraph en Español (Noticias sobre Bitcoin, Blockchain y el futuro del dinero)",
//         "title": "¿Los ETF de BTC al contado pueden superar a los de oro? - Cointelegraph en Español (Noticias sobre Bitcoin, Blockchain y el futuro del dinero)",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vZXMuY29pbnRlbGVncmFwaC5jb20vbmV3cy9iaXRjb2luLXNwb3QtZXRmcy1tYWtlLWEtc3BsYXNoLWJ1dC1jYW4tdGhlaXItYXVtLXN1cnBhc3MtZ29sZC1ldGZz0gEA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T19:00:12Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "The Guardian",
//         "title": "Groceries on special fly off Australian supermarket shelves at 70 times normal rate - The Guardian",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMid2h0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS9idXNpbmVzcy8yMDI0L2phbi8yMS9hdXN0cmFsaWEtc3VwZXJtYXJrZXQtZ3JvY2VyeS1zcGVjaWFscy1kZWFscy1zYWxlcy1kYXRhLXVuaGVhbHRoeS1mb29k0gEA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T19:00:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "EL ESPAÑOL",
//         "title": "El altavoz portátil más salvaje: montado dentro de una caja de munición y con resistencia militar - EL ESPAÑOL",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMijwFodHRwczovL3d3dy5lbGVzcGFub2wuY29tL29taWNyb25vL2hhcmR3YXJlLzIwMjQwMTIwL2FsdGF2b3otcG9ydGF0aWwtc2FsdmFqZS1tb250YWRvLWRlbnRyby1jYWphLW11bmljaW9uLXJlc2lzdGVuY2lhLW1pbGl0YXIvODI1NjY3ODY0XzAuaHRtbNIBkwFodHRwczovL3d3dy5lbGVzcGFub2wuY29tL29taWNyb25vL2hhcmR3YXJlLzIwMjQwMTIwL2FsdGF2b3otcG9ydGF0aWwtc2FsdmFqZS1tb250YWRvLWRlbnRyby1jYWphLW11bmljaW9uLXJlc2lzdGVuY2lhLW1pbGl0YXIvODI1NjY3ODY0XzAuYW1wLmh0bWw?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T19:00:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "iPaidia.gr",
//         "title": "Συντάξεις Φεβρουαρίου 2024: Ποιοί θα δουν «κούρεμα» και πόσο - iPaidia.gr",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMiXGh0dHBzOi8vd3d3LmlwYWlkaWEuZ3IvZWlkaXNlaXMvc2ludGFrc2Vpcy1mZXZyb3VhcmlvdS0yMDI0LXBvaW9pLXRoYS1kb3VuLWtvdXJlbWEta2FpLXBvc28v0gFgaHR0cHM6Ly93d3cuaXBhaWRpYS5nci9laWRpc2Vpcy9zaW50YWtzZWlzLWZldnJvdWFyaW91LTIwMjQtcG9pb2ktdGhhLWRvdW4ta291cmVtYS1rYWktcG9zby9hbXAv?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T18:51:27Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Chinanews.com.cn"
//         },
//         "author": "chinanews",
//         "title": "上交所修订《纪律处分实施标准》将科创板核心技术人员纳入监管对象-中新网 - 中国新闻网",
//         "description": "",
//         "url": "https://www.chinanews.com.cn/cj/2024/01-21/10149961.shtml",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T18:42:05Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "Sudinfo.be",
//         "title": "Une page se tourne en Belgique : la banque disparaît, un million de clients vont changer d'organisme bancaire ce week-end, « certains services seront inaccessibles » - Sudinfo.be",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMigAFodHRwczovL3d3dy5zdWRpbmZvLmJlL2lkNzc0MjY4L2FydGljbGUvMjAyNC0wMS0yMC91bmUtcGFnZS1zZS10b3VybmUtZW4tYmVsZ2lxdWUtbGEtYmFucXVlLWRpc3BhcmFpdC11bi1taWxsaW9uLWRlLWNsaWVudHMtdm9udNIBAA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T18:40:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "Η Καθημερινή",
//         "title": "«Πληρώνω 900 ευρώ για ένα κρύο σπίτι» | Η ΚΑΘΗΜΕΡΙΝΗ - Η Καθημερινή",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMiUWh0dHBzOi8vd3d3LmthdGhpbWVyaW5pLmdyL3NvY2lldHkvNTYyODM0NDgzL3BsaXJvbm8tOTAwLWV5cm8tZ2lhLWVuYS1rcnlvLXNwaXRpL9IBAA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T18:40:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "infobae",
//         "title": "Analistas: si Spirit no reconfigura su estrategia financiera, podría verse empujada a la bancarrota - infobae",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMiigFodHRwczovL3d3dy5pbmZvYmFlLmNvbS93YXBvLzIwMjQvMDEvMjAvYW5hbGlzdGFzLXNpLXNwaXJpdC1uby1yZWNvbmZpZ3VyYS1zdS1lc3RyYXRlZ2lhLWZpbmFuY2llcmEtcG9kcmlhLXZlcnNlLWVtcHVqYWRhLWEtbGEtYmFuY2Fycm90YS_SAZ4BaHR0cHM6Ly93d3cuaW5mb2JhZS5jb20vd2Fwby8yMDI0LzAxLzIwL2FuYWxpc3Rhcy1zaS1zcGlyaXQtbm8tcmVjb25maWd1cmEtc3UtZXN0cmF0ZWdpYS1maW5hbmNpZXJhLXBvZHJpYS12ZXJzZS1lbXB1amFkYS1hLWxhLWJhbmNhcnJvdGEvP291dHB1dFR5cGU9YW1wLXR5cGU?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T18:38:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "Business.dir.bg",
//         "title": "Нови рекорди в потреблението на горива през 2023 г. - Business.dir.bg",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMiW2h0dHBzOi8vYnVzaW5lc3MuZGlyLmJnL2Vrc3BlcnRuby1tbmVuaWUvbm92aS1yZWtvcmRpLXYtcG90cmVibGVuaWV0by1uYS1nb3JpdmEtcHJlei0yMDIzLWfSAQA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-01-20T18:36:02Z",
//         "content": null
//     }
//   ];
//   constructor() {
//     super();
//     console.log("Hello I am a constructor from News component");
//     this.state = {
//       articles: this.articles,
//     //   articles: [],
//       loading: false,
//     };
//   }
//   async componentDidMount(){
//     let url = "https://newsapi.org/v2/top-headlines?category=business&category=${this.props.category}&apiKey=7091133cbe2f49f2950e229aac5acaa7";
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     console.log(parsedData);
//     this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})
//   }
//   handlePrevClick = async()=>{
//     console.log("Previous")
//     let url = `https://newsapi.org/v2/top-headlines?category=business&category=${this.props.category}&apiKey=7091133cbe2f49f2950e229aac5acaa7&page=${this.state.page-1}&pageSize=20`;
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     console.log(parsedData);
//     this.setState({
//         page : this.state.page-1,
//         articles: parsedData.articles
//     })

//   }
//   handleNextClick = async() =>{
//     console.log("Next")
//     if(this.state.page+1 > Math.ceil(this.state.totalResults/20))
//     {

//     }
//     else{
//         let url = `https://newsapi.org/v2/top-headlines?category=business&category=${this.props.category}&apiKey=7091133cbe2f49f2950e229aac5acaa7&page=${this.state.page+1}&pageSize=20`;
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData);
//         this.setState({
//             page : this.state.page+1,
//             articles: parsedData.articles
//         })
//     }
//   }
//   render() {
//     return (
//       <div className="container my-3">
//         <h2>NewsMonkey - Top Headlines</h2>
//         <div className="row">
//         {this.state.articles.map((element)=>{
//           return <div className="col-md-4" key={element.url}>
//             <NewsItem
//               title={element.title ? element.title.slice(0,45) : "Some error occured. We will get back to you soon :-)"}
//               description={element.description ? element.description : "Some error occured. We will get back to you soon :-)"}
//               imageUrl={element.urlToImage}
//               newsUrl={element.url}
//             />
//           </div>
//           })}
//         </div>
//         <div className="container d-flex justify-content-between">
//             <button disabled ={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
//             <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default News;
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaulProps = {
    country: "in",
    // pageSize: 8,
    category: "General",
  };
  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7091133cbe2f49f2950e229aac5acaa7&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(60);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${this.props.category}&apiKey=7091133cbe2f49f2950e229aac5acaa7&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // })
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    // console.log("Next");
    // if (
    //     !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${this.props.category}&apiKey=7091133cbe2f49f2950e229aac5acaa7&page=${
    //       this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   })
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7091133cbe2f49f2950e229aac5acaa7&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    // console.log(this.articles.length);
  };
  render() {
    // console.log(this.props);
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "40px 0px" }}>
          NewsMonkey - Top Headlines from{" "}
          {this.capitalizeFirstLetter(this.props.category)}
        </h1>
        <div className="row">
          {this.state.loading && <Spinner />}
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" >
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          />
        </div>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;

// {/* {this.state.loading && <Spinner />} */}
