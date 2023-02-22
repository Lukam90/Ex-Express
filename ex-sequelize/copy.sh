date=`date +"%H.%M"`
name="Sequelize"

target="$HOME/Téléchargements/Copies/CP-$name-$date"

cp -r config $target
cp -r controllers $target
cp -r models $target
cp -r routes $target

cp *.js $target

echo "Copie $name - $date"