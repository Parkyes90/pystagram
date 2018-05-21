from django.db import models
from pystagram.users.models import User
from pystagram.images.models import Image, TimeStampedModel


class Notification(TimeStampedModel):

    TYPE_CHOICES = (
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow')
    )

    creator = models.ForeignKey(
        User,
        related_name='creator',
        on_delete=models.CASCADE
    )
    to = models.ForeignKey(
        User,
        related_name='to',
        on_delete=models.CASCADE
    )
    image = models.ForeignKey(
        Image,
        null=True,
        blank=True,
        on_delete=models.CASCADE
    )
    notification_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    comment = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return 'From: {creator} - To: {to}'.format(
            creator=self.creator,
            to=self.to
        )
