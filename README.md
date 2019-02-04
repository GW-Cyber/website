Welcome to the GW-Cyber Website. 

GW Cyber is a student led technical organization at The George Washington University. 
Our focus is on educating the student body about the security of the entire systems stacks – from computer hardware, 
to networks, to software. The organization’s goal is to not only expose students to the vulnerabilities and applications
used to exploit information technology, but also to teach students how to better guard themselves against these attacks. 
GW Cyber is extremely unique, as it is the first entirely student-driven information system, cyber oriented club at GW. 
Our meetings generally consist of workshops, led by experienced, senior members. 
They also consist of occasional professional guest speakers, conferences, and events. 
If youre interested in defending yourself in a technologically driven world, talk to us!":


It is still currently in the development phase, but we hope to have it up and running as soon as possible.


Our current todo list includes:

1. Fix about us, eboard, events and contact us links. They are currently partially broken as a result of the index file's href's-
referring to them as if they are in the same folder. As well, the same needs to be done from these pages to reaccess the index file.
They are assuming that index is in the src folder as they are. 
On two pages there is are inconsistent orderings of the internal links to travel to.
As a default, the home page lists in order (about us, e-board, events, contact us).

Upon navigating to the about us page, we see that the about us link is appropriately chaged to "home", but e-board and events are also swapped unnecessarily.

Upon navigating to both the eboard and events pages, we see that in both cases, the button you clicked on to visit the current page is swapped out with the page you visited which is appropriate to properly layout the site.

However, upon navigating to the contact us page from any other page, we see that the contact-us button remains even though we are currently present on that page, and replaces the appropriate link for the about us page.



2. Change the images on home page. A red die and a scheduling meme do not portray the formal website design we are interested in. Alternate text should be added, as well as a real description for each image instead of the placeholder text "this is the first image"

3. Change the order of the cycling slides. It does not make sense to number them and have them start at the last slide. 

4. The "Events" page has no events. It is actually a duplicate of the "Eboard" page, but without the images.

5. The Contact Us page has an incorrect title based on a different organization.

6. We still require the logo that was supposedly being created for GW-Cyber.

7. Once all of this is done, the website should be styled. It needs consistent font size, and a GW Blue for the background
instead of the current dark red that it has. https://teamcolorcodes.com/george-washington-colonials-color-codes/ gives an option for buff and blue html color codes.

8. There *were* a significant number of <li> tags previously used to hold together the website's styling.

Solutions provided and fixes made:

1. No more broken links! Orderings fixed (although negotiable)

2. The images have not been changed, and will be eventually. Alt text has not yet been added, but when we commit to images, we need to stop pulling them from github and use an assets folder

3. the cycling slides have been fixed. Now when a page loads it starts at the first slide instead of the last slide.

4. The events page still requires events.

5. Contact us page now says GW Cyber as it should, and the form on the page is styled

6. The logo is still required.

7. Styling has begun but is not complete. The background color is now GW blue. Headers are now consistently sized. It looked weird to navigate from one page to another and have the words GW Cyber change size or position on the page.

8. The first attempt to remove the excessive <li> tags has been pushed to the master branch. More attempts may be necessary. The zip folder contains the index page with <li> tags removed and css classes changed where necessary as well as an improved stylesheet to recreate the website without <li>'s.
