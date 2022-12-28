<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221228155841 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE staking_plan DROP FOREIGN KEY FK_C168AB9C34128B91');
        $this->addSql('DROP TABLE network');
        $this->addSql('DROP INDEX IDX_C168AB9C34128B91 ON staking_plan');
        $this->addSql('ALTER TABLE staking_plan ADD networks LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', DROP network_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE network (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, wallet_address VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE staking_plan ADD network_id INT NOT NULL, DROP networks');
        $this->addSql('ALTER TABLE staking_plan ADD CONSTRAINT FK_C168AB9C34128B91 FOREIGN KEY (network_id) REFERENCES network (id)');
        $this->addSql('CREATE INDEX IDX_C168AB9C34128B91 ON staking_plan (network_id)');
    }
}
