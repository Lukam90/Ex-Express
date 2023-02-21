date=`date +"%H.%M"`
name="MERN"

target="$HOME/Téléchargements/Copies/CP-$name-$date"

cp -r backend/controllers $target
cp -r backend/models $target
cp -r backend/routes $target
cp backend/*.js $target

cp -r frontend/src $target

echo "Copie $name - $date"