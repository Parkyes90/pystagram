from django.contrib.auth.models import models
from django.contrib.humanize.templatetags.humanize import naturaltime

from taggit.managers import TaggableManager

from pystagram.users import models as user_model

# Create your models here.


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Image(TimeStampedModel):
    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creator = models.ForeignKey(
        user_model.User,
        on_delete=models.CASCADE,
        null=True,
        related_name='images'
    )
    tags = TaggableManager()

    @property
    def like_count(self):
        return self.likes.all().count()

    @property
    def comment_count(self):
        return self.comments.all().count()

    @property
    def natural_time(self):
        return naturaltime(self.created_at)

    def __str__(self):
        return "{location} - {caption}".format(
            location=self.location, caption=self.caption
        )

    class Meta:
        ordering = ['-created_at']


class Comment(TimeStampedModel):
    creator = models.ForeignKey(
        user_model.User,
        on_delete=models.CASCADE,
        null=True
    )
    image = models.ForeignKey(
        Image,
        on_delete=models.CASCADE,
        related_name="comments",
        null=True
    )

    message = models.TextField()

    def __str__(self):
        return self.message


class Like(TimeStampedModel):
    creator = models.ForeignKey(
        user_model.User,
        on_delete=models.CASCADE,
        null=True
    )
    image = models.ForeignKey(
        Image,
        on_delete=models.CASCADE,
        related_name="likes",
        null=True
    )

    def __str__(self):
        return '{username} - {caption}'.format(
            username=self.creator.username, caption=self.image.caption
        )
