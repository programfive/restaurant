"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit3,
  Save,
  X,
  Settings,
  Bell,
  Shield,
  Eye,
  Camera,
  Globe,
  Briefcase,
  Award,
  Heart,
  MessageSquare,
  Users,
  Star,
  Cake
} from "lucide-react"

export  function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "María García",
    email: "maria.garcia@example.com",
    phone: "+34 612 345 678",
    location: "Madrid, España",
    bio: "Desarrolladora Full Stack apasionada por crear experiencias digitales increíbles. Me encanta trabajar con React, Next.js y TypeScript.",
    website: "https://mariagarcia.dev",
    birthdate: "24 de noviembre 1990",
  })

  const handleSave = () => {
    setIsEditing(false)
    // Aquí iría la lógica para guardar los datos
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Aquí podrías revertir los cambios si es necesario
  }

  return (
    <div className="min-h-screen py-8">
      <div className=" px-4 space-y-6">
        {/* Header del perfil */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="María García" />
                  <AvatarFallback className="text-2xl">MG</AvatarFallback>
                </Avatar>
                <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full">
                  <Camera className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold">{formData.name}</h1>
                  <Badge variant="secondary" className="gap-1">
                    <Award className="w-3 h-3" />
                    Admin
                  </Badge>
                </div>
                <p className="text-muted-foreground">{formData.bio}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {formData.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {formData.birthdate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Miembro desde Enero 2023
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)} className="gap-2">
                    <Edit3 className="w-4 h-4" />
                    Editar perfil
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button onClick={handleSave} className="gap-2">
                      <Save className="w-4 h-4" />
                      Guardar
                    </Button>
                    <Button variant="outline" onClick={handleCancel} className="gap-2">
                      <X className="w-4 h-4" />
                      Cancelar
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Estadísticas */}
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Estadísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 " />
                    <span className="text-sm">Me gusta</span>
                  </div>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 " />
                    <span className="text-sm">Compras</span>
                  </div>
                  <span className="font-semibold">567</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 " />
                    <span className="text-sm">Ventas</span>
                  </div>
                  <span className="font-semibold">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">Valoración</span>
                  </div>
                  <span className="font-semibold">4.8</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Configuración rápida
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4" />
                    <span className="text-sm">Notificaciones</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">Perfil público</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Verificación 2FA</span>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Información personal */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Información personal
                </CardTitle>
                <CardDescription>Gestiona tu información personal y de contacto</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nombre completo
                    </Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{formData.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{formData.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Teléfono
                    </Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{formData.phone}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Ubicación
                    </Label>
                    {isEditing ? (
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{formData.location}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Sitio web
                    </Label>
                    {isEditing ? (
                      <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{formData.website}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2">
                      <Cake className="w-4 h-4" />
                      Fecha de nacimiento
                    </Label>
                    {isEditing ? (
                      <Input
                        id="company"
                        value={formData.birthdate}
                        onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{formData.birthdate}</p>
                    )}
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="bio">Biografía</Label>
                  {isEditing ? (
                    <Textarea
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      rows={4}
                      placeholder="Cuéntanos sobre ti..."
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground">{formData.bio}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
