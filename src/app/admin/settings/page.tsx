'use client'

import { useState } from 'react'
import { 
  Save,
  Phone,
  MapPin,
  Clock,
  Globe,
  MessageCircle,
  Instagram,
  Facebook,
  CheckCircle
} from 'lucide-react'

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false)
  const [settings, setSettings] = useState({
    whatsappNumber: '+212 600 000 000',
    phone: '+212 600 000 000',
    address: 'Casablanca, Maroc',
    workingHours: '9h - 21h, Tous les jours',
    instagram: 'https://instagram.com/darrahati',
    facebook: 'https://facebook.com/darrahati',
    defaultLanguage: 'ar',
    currency: 'MAD',
  })

  const handleSave = () => {
    // In production, save to database
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-earth-800">Paramètres</h1>
          <p className="text-earth-500 mt-1">Configurez votre boutique</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-earth-900 font-medium rounded-xl transition-colors"
        >
          {saved ? <CheckCircle className="w-5 h-5" /> : <Save className="w-5 h-5" />}
          {saved ? 'Enregistré!' : 'Enregistrer'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Settings */}
        <div className="bg-white rounded-2xl border border-earth-100 p-6">
          <h2 className="text-lg font-semibold text-earth-800 mb-6 flex items-center gap-2">
            <Phone className="w-5 h-5 text-gold-500" />
            Informations de contact
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-earth-700 mb-2">
                Numéro WhatsApp
              </label>
              <div className="relative">
                <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                <input
                  type="text"
                  value={settings.whatsappNumber}
                  onChange={(e) => setSettings({...settings, whatsappNumber: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 border border-earth-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
                />
              </div>
              <p className="text-xs text-earth-500 mt-1">
                Ce numéro sera utilisé pour recevoir les commandes WhatsApp
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-earth-700 mb-2">
                Téléphone
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
                <input
                  type="text"
                  value={settings.phone}
                  onChange={(e) => setSettings({...settings, phone: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 border border-earth-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-earth-700 mb-2">
                Adresse
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
                <input
                  type="text"
                  value={settings.address}
                  onChange={(e) => setSettings({...settings, address: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 border border-earth-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-earth-700 mb-2">
                Heures de travail
              </label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
                <input
                  type="text"
                  value={settings.workingHours}
                  onChange={(e) => setSettings({...settings, workingHours: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 border border-earth-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-white rounded-2xl border border-earth-100 p-6">
          <h2 className="text-lg font-semibold text-earth-800 mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-gold-500" />
            Réseaux sociaux
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-earth-700 mb-2">
                Instagram
              </label>
              <div className="relative">
                <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-500" />
                <input
                  type="url"
                  value={settings.instagram}
                  onChange={(e) => setSettings({...settings, instagram: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 border border-earth-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
                  placeholder="https://instagram.com/..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-earth-700 mb-2">
                Facebook
              </label>
              <div className="relative">
                <Facebook className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-600" />
                <input
                  type="url"
                  value={settings.facebook}
                  onChange={(e) => setSettings({...settings, facebook: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 border border-earth-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
                  placeholder="https://facebook.com/..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Site Settings */}
        <div className="bg-white rounded-2xl border border-earth-100 p-6">
          <h2 className="text-lg font-semibold text-earth-800 mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-gold-500" />
            Paramètres du site
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-earth-700 mb-2">
                Langue par défaut
              </label>
              <select
                value={settings.defaultLanguage}
                onChange={(e) => setSettings({...settings, defaultLanguage: e.target.value})}
                className="w-full px-4 py-3 border border-earth-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none appearance-none bg-white"
              >
                <option value="ar">العربية (Arabe)</option>
                <option value="fr">Français</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-earth-700 mb-2">
                Devise
              </label>
              <select
                value={settings.currency}
                onChange={(e) => setSettings({...settings, currency: e.target.value})}
                className="w-full px-4 py-3 border border-earth-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none appearance-none bg-white"
              >
                <option value="MAD">MAD - Dirham Marocain</option>
              </select>
            </div>
          </div>
        </div>

        {/* Admin Credentials */}
        <div className="bg-white rounded-2xl border border-earth-100 p-6">
          <h2 className="text-lg font-semibold text-earth-800 mb-6">
            🔐 Identifiants Admin
          </h2>

          <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl mb-4">
            <p className="text-sm text-orange-700">
              ⚠️ Pour modifier les identifiants admin, éditez le fichier 
              <code className="bg-white px-2 py-0.5 rounded mx-1">src/store/useAdminStore.ts</code>
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between p-3 bg-sand-50 rounded-lg">
              <span className="text-earth-500">Email actuel:</span>
              <span className="font-medium text-earth-800">admin@darrahati.ma</span>
            </div>
            <div className="flex justify-between p-3 bg-sand-50 rounded-lg">
              <span className="text-earth-500">Mot de passe:</span>
              <span className="font-medium text-earth-800">••••••••</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

