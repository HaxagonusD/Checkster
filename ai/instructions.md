# Context

Artificial intelligence is everywhere around us and is growing more and more prevalent each day. One area that AI has recently gained traction in is the automation space. Why have a person read a long and complex legal document when a machine can do it faster and more accurately? But what about when things get messy; like (some people's) handwriting. People are pretty good at reading handwriting of various quality, but how good are machines at it? Lets find out. Now as a bank, we thought about where we most often see handwriting nowadays. Thankfully, most transactions have been digitized. Except for one place: Checks.

As far as technology limitations go there are none. Just make sure your solution is able to be packaged in a way where we can take a look at it.

# Content

The data for this competition is organized as follows:

- data.csv
    - A comma separated value file laid out with headers indicating, in order, the path to the image from this directory, the date as written in the check, the check amount as written in words, and the check amount written in numbers. The path is relative to this directory. The order of images in this file may or may not corelate to the order of the images in the folder.
- images/
    - folder containing the actual check images used for this competition. Image types are not guaranteed (.png/.jpg/.jpeg) nor are image sizes/resolutions.
- validation/
    - folder for images to use to validate your solution

Notes:
In our data set, the amount as text should be all lowercase
In our data set, the amount as numbers should be out to two decimal places
In our data set, the date is exactly as written
Feel free to add to the data set while building your solution

# Acknowledgements

All checks in the images have been created for the purpose of this competition and are not indicative of real checks that Citi may receive.

# Inspiration

- Can we take handwritten text and convert that into a digital form
- Can we take images and verify the amount with what is written on the check
- Can we validate the information extracted to prevent fraud