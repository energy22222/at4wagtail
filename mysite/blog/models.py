#
# version 2024-08-07
#
#

# pour la gestion des auteurs 
from wagtail.snippets.models import register_snippet

        
from django.db import models

# New imports added for ParentalKey, Orderable, InlinePanel

from modelcluster.fields import ParentalKey

from wagtail.models import Page, Orderable
from wagtail.fields import RichTextField
#from wagtail.admin.panels import FieldPanel, InlinePanel
from wagtail.search import index

# New imports added for forms and ParentalManyToManyField, and MultiFieldPanel
from django import forms

from modelcluster.fields import ParentalKey, ParentalManyToManyField
from wagtail.admin.panels import FieldPanel, InlinePanel, MultiFieldPanel



class BlogIndexPage(Page):
    intro = RichTextField(blank=True)

    # add the get_context method:
    def get_context(self, request):
        # Update context to include only published posts, ordered by reverse-chron
        context = super().get_context(request)
        blogpages = self.get_children().live().order_by('-first_published_at')
        context['blogpages'] = blogpages
        return context

    # ...
    content_panels = Page.content_panels + [
        FieldPanel('intro')
    ]




# ... Keep the definition of BlogIndexPage, update the content_panels of BlogPage, and add a new BlogPageGalleryImage model:


class BlogPage(Page):
    date = models.DateField("Post date")
    intro = models.CharField(max_length=250)
    body = RichTextField(blank=True)
    authors = ParentalManyToManyField('blog.Author', blank=True)

    # Add the main_image method:
    def main_image(self):
        gallery_item = self.gallery_images.first()
        if gallery_item:
            return gallery_item.image
        else:
            return None

    search_fields = Page.search_fields + [
        index.SearchField('intro'),
        index.SearchField('body'),
    ]

    # ... Keep the main_image method and search_fields definition. Modify your content_panels:
    content_panels = Page.content_panels + [
        #multi field permet de regrouper la date et l,auteur pour plus de lisibilit
        MultiFieldPanel([
            FieldPanel('date'),
            FieldPanel('authors', widget=forms.CheckboxSelectMultiple),
        ], heading="Blog information"),
        FieldPanel('intro'),
        FieldPanel('body'),
        InlinePanel('gallery_images', label="Gallery images"),
    ]
    




    

class BlogPageGalleryImage(Orderable):
    page = ParentalKey(BlogPage, on_delete=models.CASCADE, related_name='gallery_images')
    image = models.ForeignKey(
        'wagtailimages.Image', on_delete=models.CASCADE, related_name='+'
    )
    caption = models.CharField(blank=True, max_length=250)

    panels = [
        FieldPanel('image'),
        FieldPanel('caption'),
    ]

# ... Keep BlogIndexPage, BlogPage, BlogPageGalleryImage models, and then add the Author model:
@register_snippet
class Author(models.Model):
    name = models.CharField(max_length=255)
    author_image = models.ForeignKey(
        'wagtailimages.Image', null=True, blank=True,
        on_delete=models.SET_NULL, related_name='+'
    )

    panels = [
        FieldPanel('name'),
        FieldPanel('author_image'),
    ]

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Authors'
        
