
cd ~
ssh-keygen -t ed25519 -C louis.boudet@cpe.fr
# choisir le chemin du fichier, par ex : .ssh/cpe-github
ssh-add .ssh/cpe-github
cat .ssh/cpe-github.pub
#copier la clé vers Github
git clone git@github.com:cpe-lyon/groupe-b-boudet-fron.git