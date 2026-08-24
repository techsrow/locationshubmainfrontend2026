#!/bin/bash

mkdir -p downloads

urls=(
https://booking.locationshub.in/wp-content/uploads/2025/02/28a.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/29.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/30a-1.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/31a-1.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/32a-1.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/33a.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/34a.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/35a.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/36a.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/37a.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/38a.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/39a.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/40a.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/41a.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/42a.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/44a.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/45a.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/46.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/47a.jpg
https://booking.locationshub.in/wp-content/uploads/2025/02/48a.jpg
)

for url in "${urls[@]}"; do
  echo "Downloading: $url"
  curl -L "$url" -o "downloads/$(basename $url)"
done

echo "✅ All images downloaded in /downloads folder"