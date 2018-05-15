from django.contrib.auth.models import models
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
        null=True
    )

    def __str__(self):
        return "{location} - {caption}".format(
            location=self.location, caption=self.caption
        )


class CommonForeignKey(TimeStampedModel):
    creator = models.ForeignKey(
        user_model.User,
        on_delete=models.CASCADE,
        null=True
    )
    image = models.ForeignKey(Image, on_delete=models.CASCADE, null=True)

    class Meta:
        abstract = True


class Comment(CommonForeignKey):
    message = models.TextField()

    def __str__(self):
        return self.message


class Like(CommonForeignKey):
    def __str__(self):
        return '{username} - {caption}'.format(
            username=self.creator.username, caption=self.image.caption
        )
