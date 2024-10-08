# Generated by Django 5.0.7 on 2024-07-28 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LongQuestions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('announcement', models.CharField(max_length=255)),
                ('category', models.CharField(choices=[('social_orientating_and_receptive_communication', 'Social orientating and receptive communication'), ('expressive_communication', 'Expressive communication'), ('sensory_processing', 'Sensory processing'), ('repetitive_behaviour', 'Repetitive behaviour'), ('imitation', 'Imitation'), ('social_and_affective_engagement', 'Social and affective engagement')], max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='ShortQuestions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('announcement', models.CharField(max_length=255)),
                ('category', models.CharField(choices=[('social_orientating_and_receptive_communication', 'Social orientating and receptive communication'), ('expressive_communication', 'Expressive communication'), ('sensory_processing', 'Sensory processing'), ('repetitive_behaviour', 'Repetitive behaviour'), ('imitation', 'Imitation'), ('social_and_affective_engagement', 'Social and affective engagement')], max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('age', models.SmallIntegerField()),
                ('sex', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('question_type', models.CharField(choices=[('Long', 'Long'), ('Short', 'Short')], max_length=10)),
                ('questions_response', models.JSONField()),
            ],
        ),
    ]
