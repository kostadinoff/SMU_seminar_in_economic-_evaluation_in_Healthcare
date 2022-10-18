function Gallery (group, size)
{
	this.size = size;
	this.group = group;
	this.path = "img/" + group + "/";
	this.extension = "jpg";
	this.htmlClass = "fancybox w3-col l3 m4 s6 w3-margin-bottom";
	this.print = function()
	{
		var galleryObj = document.getElementById("gallery-data");
		for(i=1; i <= this.size; i++)
		{
			var galleryLink = document.createElement("a");
			galleryLink.setAttribute("class", this.htmlClass);
			var imgPath = "../data/" + this.path;
			if(i < 10)
			{
				imgPath += "0";
			}
			imgPath += i;
			thumbPath = imgPath + "thumb";
			imgPath += ".";
			thumbPath += ".";
			imgPath += this.extension;
			thumbPath += this.extension;
			galleryLink.setAttribute("href", imgPath);
			galleryLink.setAttribute("target", "_blank");
			galleryLink.setAttribute("data-fancybox", this.group);
			galleryLink.setAttribute("title", "");
			var galleryImg = document.createElement("img");
			galleryImg.setAttribute("src", thumbPath);
			galleryImg.setAttribute("style", "width:100%");
			galleryImg.setAttribute("alt", "image");
			galleryLink.appendChild(galleryImg);
			galleryObj.appendChild(galleryLink);
		}
	}
}

